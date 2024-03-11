import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { SendInfoService } from '../../service/send-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  userRgisters:any[] = [];
  myDatas:any[] = [];
  filterUser = '';

  constructor(private userService: UserService, private sendInfoService: SendInfoService, private router: Router) { };

  ngOnInit() {
   this.loadData();
  }

  loadData() {
    this.userService.getAllData().subscribe(data => {
      this.userRgisters[0] = Object.values(data);
      this.myDatas = this.userRgisters[0][1];
    });
  }


  onDelete(userRegister:any){
    this.sendInfoService.addInfoUser(userRegister);
    this.router.navigate(['/eliminar']);
  }

  onUpdate(userRegister:any){
    this.sendInfoService.addInfoUser(userRegister);
    
    this.router.navigate(['/formulario']);
  }

  redirectCreateUser() {
    this.sendInfoService.deleteInfoUser();
    this.router.navigate(['/formulario']);
  }


}
