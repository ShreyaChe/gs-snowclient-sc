import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NodejService {
  baseurl="http://localhost:3000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private httpClient: HttpClient) { }

  getUid(): Observable<any>
  {
    return this.httpClient.get(this.baseurl+'/api/v1/generate_uid')
     
  }

  newUser(guid,user): Observable<any> {
    const body = {guid: guid,user_name:user.username,email: user.email, password: user.password}
    return this.httpClient.post(this.baseurl+'/api/v1/user',body,
    {headers:this.httpHeaders});
  }
  loginUser(user): Observable<any> {
    const body = {email: user.email, password: user.password}
    return this.httpClient.post(this.baseurl+'/api/v1/user/login',body,
    {headers:this.httpHeaders});
  }
}
