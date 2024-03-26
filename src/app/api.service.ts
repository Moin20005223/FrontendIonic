import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  cart: { price: string, img: string }[] = [];
  constructor() { 
   
  
  }
  url="http://localhost:2100";
  loginEndPoint="login";
  registerEndPoint="register";
  logoutEndPoint="logout";


 async fetchLoginData(data:any)
  {
    try
    {
      const response=await axios.post(`${this.url}/${this.loginEndPoint}`,data,{headers:{"Content-Type":"application/json"},
      withCredentials:true})
      if(response.data)
      {
        return response.data;
      }
    }
    catch(err)
    {
      throw err;
    }
  }
  async fetchLogout()
  {
    try
    {
      const response=await axios.get(`${this.url}/${this.logoutEndPoint}`,{headers:{"Content-Type":"application/json"},
      withCredentials:true})
      if(response.data)
      {
        return response.data;
      }
    }
    catch(err)
    {
      throw err;
    }
  }
  async fetchRegisterData(data:any)
  {
    await axios.post(`${this.url}/${this.registerEndPoint}`,data,{headers:{"Content-Type":"application/json"},
    withCredentials:true})
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
}
