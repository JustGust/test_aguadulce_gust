import { Component, OnInit } from '@angular/core';
import { SendInfoService } from '../components/service/send-info.service';

@Component({
  selector: 'app-app.layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  showAlert: boolean = false;
  showAlertError: boolean = false;
  message: string = '';

  constructor(private sendInfoService: SendInfoService) {}

  ngOnInit(){
    this.sendInfoService.alert$.subscribe((data:any)=>{
      this.message = data.message;
      data.type === 'True'? this.showAlert = true: this.showAlertError = true;
      setTimeout(() => {
        this.showAlert = false;
        this.showAlertError = false;
      }, data.time);
    });
  }

}
