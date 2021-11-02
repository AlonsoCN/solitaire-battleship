import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toaster-notification',
  templateUrl: './toaster-notification.component.html',
  styleUrls: ['./toaster-notification.component.scss'],
})
export class ToasterNotificationComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() type: 'success' | 'warning' | 'error' = 'success';
  @Output() dismissClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDismiss() {
    this.dismissClicked.emit();
  }
}
