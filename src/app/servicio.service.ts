import { Injectable } from '@angular/core';
import data from '../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() {}


  getPerfil(){
    return data.currentUser
  }
  getUser(){
    return data.currentUser.username
  }
  getComentarios(){
    console.log(data.comments)
    return data.comments
  }
}
