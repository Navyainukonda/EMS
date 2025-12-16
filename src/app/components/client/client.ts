import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { APIResponseModel } from '../../model/interface/role';
import { ClientModel } from '../../model/class/Client';
import { DatePipe, JsonPipe, UpperCasePipe ,AsyncPipe} from '@angular/common';
import { Observable } from 'rxjs';
import { Alert } from '../../reusablecomponents/alert/alert';
import { MyButton } from '../../reusablecomponents/my-button/my-button';

@Component({
  selector: 'app-client',
  templateUrl: './client.html',
  styleUrls: ['./client.css'],
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe,Alert,MyButton]

})
export class ClientComponent implements OnInit {

  currentDate: Date = new Date();
  clientObj: ClientModel = new ClientModel();
  clientList: ClientModel[] = [];
  isLoading = false;

  constructor(private clientService: ClientService) {}

  userList$!: Observable<any> ;

  ngOnInit(): void {
    this.loadClients();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClients(): void {
    this.isLoading = true;
    this.clientService.getAllClients().subscribe({
      next: (res: APIResponseModel) => {
        this.clientList = res.data || [];
        this.isLoading = false;
      },
      error: () => {
        alert('Error fetching clients');
        this.isLoading = false;
      }
    });
  }



  onSaveClient(data: string): void {
    this.clientService.addUpdate(this.clientObj).subscribe({
      next: (res: APIResponseModel) => {
        if (res.result) {
          alert('Client saved successfully');
          this.clientObj = new ClientModel(); // reset form
          this.loadClients();
        } else {
          alert(res.message);
        }
      },
      error: () => alert('Error saving client')
    });
  }

  onEdit(data: ClientModel){
    this.clientObj=data;
  }
   
  onDeleteClient(id: number): void {
    this.clientService.deleteClientById(id).subscribe({
      next: () => {
        alert('Client deleted successfully');
        this.loadClients();
      },
      error: () => alert('Error deleting client')
    });
  }
}