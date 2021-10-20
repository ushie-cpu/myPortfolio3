import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class PortfolioServiceService {
private baseUrl = 'https://sq009pod2.herokuapp.com/api/user';
private userid:string = '79fcc863-5624-424b-99f7-20abf6f74344';
constructor(private http : HttpClient) { }
getdata(){
  const header = new HttpHeaders({"UserId":this.userid})
  return this.http.
  get(this.baseUrl, {headers:header})
    
  
}

}
