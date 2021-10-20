import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about';
import { PortfolioServiceService } from 'src/app/_services/portfolioService.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
bios:About={
  firstName:"",
  lastName:"",
  about:"",
  phone:"",
  email:"",
  linkedIn:"",
  socialMedia:"",
  github:""
};
constructor(private portfoliohome:PortfolioServiceService) { }

ngOnInit(): void {
  this.portfoliohome.getdata().subscribe(
    (data:any)=>{
      this.bios.firstName=data.data.firstName
      this.bios.lastName=data.data.lastName
      this.bios.about=data.data.about
      this.bios.phone=data.data.contact.phone
      this.bios.linkedIn=data.data.contact.linkedIn
      this.bios.socialMedia=data.data.contact.socialMedia
      this.bios.email=data.data.contact.email
      this.bios.github=data.data.contact.github
    })
}


}
