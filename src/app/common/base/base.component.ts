import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  constructor(public messageService: MessageService) {}

  showMessageError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: '',
      detail: message,
    });
    setTimeout(() => this.messageService.clear(), 5000);
  }

  showMessageSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail: message,
    });
    setTimeout(() => this.messageService.clear(), 5000);
  }
}
