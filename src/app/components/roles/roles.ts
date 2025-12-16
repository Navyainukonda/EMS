import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import {  APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { Master } from '../master/master';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.html',
 styleUrl: './roles.css',
  standalone:true
})
export class Roles implements OnInit{


  roleList: IRole[] =[];  // to storedata from api , it store in the form of object
http = inject(HttpClient);

  ngOnInit(): void {
    console.log('Roles component loaded');
    this.getAllRoles();
  }

getAllRoles() {
 this.http.get<APIResponseModel>("/api/ClientStrive//GetAllRoles").subscribe({
    next: (res: APIResponseModel) => {
        this.roleList = res.data;
        console.log("API result:", this.roleList);
    },
    error: (error) => {
        console.error("Roles API error:", error);
        alert("Failed to load roles.");
    }
  });
}

}
  
//   firstName :string ="Angular Tutorial";
//   angularVersion = "Version 21";

//   version: number = 18;
//   isActive:boolean = false;

//   currentDate: Date = new Date();

//   inputType:string ="radio";

//   selectedState: string = '';


//   showWelcomeAlert() {
//  alert("Welcom to angular 21 tuorial")
//   }

//   showMessage(message:string){
//     alert(message)
//   }



