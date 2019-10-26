import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnowserviceService {
  SERVER_API_URL = 'https://dev65392.service-now.com/';
  USER_INFO_URL = '/api/419327/restsnow';
  OAUTH2_CLIENT_ID= '70e89d58f3f000109c4e87ea94ab0735';
  OAUTH2_CLIENT_SECRET= '|w$(Yx!#T.';
  OAUTH2_ACCESS_TOKEN_URI = this.SERVER_API_URL + 'oauth_token.do';
  constructor(private httpClient: HttpClient) { }

  
  oauthLogin(userdata)
  {
    const httpOptions={
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: 'Basic '+btoa( this.OAUTH2_CLIENT_ID+':'+this.OAUTH2_CLIENT_SECRET )
        })
    };

    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', userdata.email)
      .set('password', userdata.password);

    return this.httpClient.post<any>(this.OAUTH2_ACCESS_TOKEN_URI, body.toString(), httpOptions);
  }
}
