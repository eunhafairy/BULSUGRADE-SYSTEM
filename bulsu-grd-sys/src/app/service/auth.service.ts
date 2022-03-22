import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private angularFireAuth: AngularFireAuth) {

 
   }


  createUser(){


  }

  login(email: string, password: string){

    this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

}
