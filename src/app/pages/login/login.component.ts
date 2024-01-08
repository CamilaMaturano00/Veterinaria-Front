import { Component, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { LoginService } from './login.service';
import { BaseComponent } from '../../common/base/base.component';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../common/loader/loader.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    NgIf,
    MessagesModule,
    LoaderComponent,
  ],
  providers: [MessageService],
})
export class LoginComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;

  private _loginService = inject(LoginService);
  private _router = inject(Router);

  constructor(private fb: FormBuilder, messageService: MessageService) {
    super(messageService);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required]],
    });
  }

  save() {
    this.isLoading = true;
    console.log(this.form.getRawValue());
    this._loginService.login(this.form.getRawValue()).subscribe({
      next: (response: any) => {
        console.log(response);
        this._router.navigate(['home']);
        this.isLoading = false;
      },
      error: (err) => {
        this.showMessageError('Ha ocurrido un error, vuelva a intentarlo.');
        this.isLoading = false;
      },
    });
  }

  hasError(field: string): any {
    return (
      this.form.controls[field].getError('required') &&
      this.form.controls[field].touched
    );
  }
}
