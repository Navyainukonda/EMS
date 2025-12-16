import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs/internal/Observable';
import { ClientModel } from '../model/class/Client';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getAllClient() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>( environment.API_URL +Constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>( environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
  }

  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>( environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT);
  }

  addUpdate(obj: ClientModel): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId= "+id)
  }

  addClientprojectUpdate(obj: ClientModel): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj);
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
// GetAllClientProjects