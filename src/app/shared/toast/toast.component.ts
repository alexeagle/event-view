import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  moduleId: module.id,
  selector: 'ev-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.css']
})
export class ToastComponent implements OnInit {
  private defaults = {
    title: '',
    message: 'May the Force be with You'
  };
  private toastElement: any;

  title: string;
  message: string;

  constructor(toastService: ToastService) {
    toastService.activate = this.activate.bind(this);
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toast');
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;

    window.setTimeout(() => this.hide(), 2500);
  }

  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }
}
