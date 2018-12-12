import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = '//jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) {  }

  public get(urlPath: string): Promise<any> {
    return this.httpClient.get(`${BASE_URL}/${urlPath}`).toPromise();
  }

}
