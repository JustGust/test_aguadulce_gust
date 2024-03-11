import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime} from 'rxjs';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { SendInfoService } from '../../service/send-info.service';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  formUser!: FormGroup;
  myDatas:any = [];
  typeForm: boolean = false;
  message:string = '';

  constructor(private fb:FormBuilder, private userService: UserService, private sendInfoService: SendInfoService, private router: Router) {
     this.buildForm();
  }


  ngOnInit() {
    this.myDatas = this.sendInfoService.getUserDatas[0];
   if (this.myDatas) {
      this.typeForm = true;
      const infoUser = this.formUser.value
      this.formUser.patchValue({
        identification: this.myDatas.identification,
        name: this.myDatas.name,
        age: this.myDatas.age,
        job: this.myDatas.position
      });
    }else{
      this.typeForm = false;
    }
  }

  get identNoValid() { return this.formUser.get('identification')?.invalid && this.formUser.get('identification')?.touched;}
  get nameNoValid() { return this.formUser.get('name')?.invalid && this.formUser.get('name')?.touched;}
  get ageNoValid() { return this.formUser.get('age')?.invalid && this.formUser.get('age')?.touched;}
  get jobNoValid() { return this.formUser.get('job')?.invalid && this.formUser.get('job')?.touched;}


  private buildForm() {
    this.formUser = this.fb.group({
      identification:['', 
        [Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(20), 
        Validators.pattern("^[0-9]+$")]
      ],
      name:['', 
      [Validators.required, 
       Validators.minLength(2), 
       Validators.maxLength(50), 
       Validators.pattern("^[a-zA-Záéíóúñ ]+([.,:;'_-][a-zA-Záéíóúñ ]+)*$")]],
      age:['', [
        Validators.maxLength(3), 
        Validators.pattern("^[0-9]+$")]],
      job:['', []],
    });
  }


  onSaveOrUpdateData() {
    if(this.formUser.invalid){
        return Object.values(this.formUser.controls).forEach(control=>{
            control.markAllAsTouched();
        })
    }

    const infoUser = this.formUser.value
    const employeeData = {
        "employee":{
        "identification":infoUser.identification,
        "name":infoUser.name,
        "age":infoUser.age,
        "position":infoUser.job
        }
    };

    if(!this.typeForm){
      this.createUser(employeeData);
    }else{
     this.userService.searchData(infoUser.identification).subscribe((response) => {
      if(response.result == 'True'){
        this.userService.updateData(this.myDatas.identification, employeeData).subscribe((response: any) => {
          this.sendInfoService.showAlert(response.message);
          this.router.navigate(['/lista']);
        });
      }else{
        this.createUser(employeeData);
      }
    });
    }
}

createUser(employeeData: any){
  this.userService.saveData(employeeData).subscribe((response: any) => {
    this.router.navigate(['/lista']);
    this.sendInfoService.showAlert(response.message, 4000, response.result);
  });
}


}
