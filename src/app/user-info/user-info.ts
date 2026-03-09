import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
@Component({
  selector: 'app-user-info',
  imports: [FormsModule,QRCodeComponent],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  pastedUrl :string = "";
  qrData: string = '';
  @ViewChild('qrCanvas', { static: false })
  qrCanvas!: ElementRef;
  downloadQRcodeFun(){
  if (!this.pastedUrl) return;
    this.qrData = this.pastedUrl;
    
    const canvas = document.querySelector('canvas');

    if (!canvas) return;

    const image = canvas.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = image;
    link.download = 'qr-code.png';
    link.click();
  }
}
