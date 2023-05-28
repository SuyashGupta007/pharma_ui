import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drugs } from '../models/drugs.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(private http:HttpClient) {  }
  //getting list of Drugs
  getAllDrugs():Observable<Drugs[]>{
    return this.http.get<Drugs[]>('https://localhost:7292/api/drug' );
  }
 //adding drug to the list
  addDrug(addDrugRequest:Drugs):Observable<Drugs>{
    addDrugRequest.id = '00000000-0000-0000-0000-000000000000';
     return this.http.post<Drugs>('https://localhost:7292/api/drug',addDrugRequest);
  }
  getDrug(id:string):Observable<Drugs>{
    return this.http.get<Drugs>('https://localhost:7292/api/drug/' + id);
  }
   updateDrug(id:string,updateDrugRequest:Drugs):Observable<Drugs>{
    return this.http.put<Drugs>('https://localhost:7292/api/drug/' +id,updateDrugRequest);
   }
   deleteDrug(id:string):Observable<Drugs>{
       return this.http.delete<Drugs>('https://localhost:7292/api/drug/' +id);
   }

}

