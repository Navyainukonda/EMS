import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client';
import { APIResponseModel, Employee, ClientProject as ClientProjectModel } from '../../model/interface/role';
import { ClientModel } from '../../model/class/Client';
import { DatePipe,UpperCasePipe } from '@angular/common';
import { Alert } from '../../reusablecomponents/alert/alert';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe,UpperCasePipe,Alert],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css',
  standalone:true
})
export class ClientProject implements OnInit {


clientService = inject(ClientService);
employeeList : Employee[]=[];
clientList: ClientModel[]=[];


firstName = signal('Angular 18');

projectList = signal<ClientProjectModel[]>([])


  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProject();
  }
  changeFName(){
    this.firstName.set("React")
  }
  
  getAllClientProject(){
    this.clientService.getAllClientProject().subscribe((res:APIResponseModel)=>{
      this.projectList.set(res.data);
    })
  }
  

  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data;
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }
  
  onSaveProject(){
    const formValue = this.projectForm.value;

this.clientService.addClientprojectUpdate(formValue).subscribe((res:APIResponseModel)=>{
  if(res.result){
    alert('project created success')
  }
  else{
    alert(res.message)
  }
})
  }

  projectForm: FormGroup= new FormGroup({
    ClientProjectId: new FormControl(0), // primary key initialoses with 0
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate:  new FormControl(""),
    expectedEndDate:  new FormControl(""),
    leadByEmpId:  new FormControl(""),
    completeDate:  new FormControl(""),
    contactPerson:  new FormControl(""),
    contactNo:  new FormControl(""),
    totalEmpWorking:  new FormControl(""),
    projectCost:  new FormControl(""),
    projectDetails:  new FormControl(""),
    contactPersonEmailId:  new FormControl(""),
    clientId:  new FormControl(""),

  })
}

