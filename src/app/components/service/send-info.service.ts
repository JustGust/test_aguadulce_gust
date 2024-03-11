import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendInfoService {

  private _myUserData:any[] = [];
  private alertSorce = new Subject();
  alert$  = this.alertSorce.asObservable();

  constructor() { }

  get getUserDatas() {
    return [...this._myUserData]
  }

  addInfoUser(datas: any) {
    this._myUserData = [];
    this._myUserData.push(datas);
  }

  deleteInfoUser() {
    this._myUserData = [];
  }

  showAlert(message: string, time: number = 4000, type: string = 'True') {
    this.alertSorce.next({message, time, type});
  }
}
