import { Component, OnInit } from '@angular/core';
import { SendInfoService } from '../../service/send-info.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  myDatas:any;

  constructor(private sendInfoService: SendInfoService, private userService: UserService, private router:Router) {
  }

  ngOnInit() {
    this.myDatas = this.sendInfoService.getUserDatas[0];
    if (!this.myDatas) {
      this.router.navigate(['/lista']);
    }
  }

  onDelete(id: number) {
    this.userService.deleData(id).subscribe((response) => {
      this.sendInfoService.showAlert(response.message);
      this.router.navigate(['/lista']);
    });
  }



}
