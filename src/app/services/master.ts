import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({  //decorator
  providedIn: 'root',
})
export class Master {
  constructor (private http: HttpClient){
    
  }


  getDesignations(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllDesignation");
  }
}
