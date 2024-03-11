import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private urlGetAllData = '/spia-test/aguadulce/employees';
  private urlBase = '/spia-test/aguadulce/employee';


  constructor(private httpCient: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.httpCient.get<any>(this.urlGetAllData);
  }

  public saveData(data: any) {
    return this.httpCient.post(this.urlBase, data);
  }

  public deleData(id: number) {
    return this.httpCient.delete<any>(this.urlBase+'/'+id);
  }

  public updateData(id: number, data: any) {
    return this.httpCient.put(this.urlBase+'/'+id, data);
  }

  public searchData(id: number) {
    return this.httpCient.get<any>(this.urlBase+'/'+id);
  }
}
