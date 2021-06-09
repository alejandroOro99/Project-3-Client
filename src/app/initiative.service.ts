import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InitiativeDTO } from './model/initiativeDTO';

@Injectable({
  providedIn: 'root',
})
export class InitiativeService {
  private initiativePostUrl = 'http://localhost:8080/initiative';
  constructor(private http: HttpClient) {}

  postInitiative(initiativeDTO: InitiativeDTO): Observable<InitiativeDTO> {
    return this.http.post<InitiativeDTO>(this.initiativePostUrl, initiativeDTO);
  //checkauthsercive to get the JWT??
  //or in component?
  }
}
