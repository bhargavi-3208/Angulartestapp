import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../app/models/users.model'


@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.hc.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }


 
}
