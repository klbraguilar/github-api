import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  gitUrl = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  public listCommits(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.gitUrl + 'repos/klbraguilar/github-api/commits');
  }
}
