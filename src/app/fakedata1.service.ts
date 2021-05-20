import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User1 } from '../app/models/users1.model'

@Injectable({
  providedIn: 'root'
})
export class Fakedata1Service {

  constructor(private hc:HttpClient) { }

  getUsers1():Observable<User1[]>{
    return this.hc.get<User1[]>('http://localhost:3000/users')
  }

  getUsersById(id):Observable<User1>{
    return this.hc.get<User1>('http://localhost:3000/users/'+id)
  }
}
