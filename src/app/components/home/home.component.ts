import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about';
import { PortfolioServiceService } from 'src/app/_services/portfolioService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bios:About={
    firstName:"",
    lastName:"",
    about:"",
    phone:"",
    email:"",
    linkedIn:"",
    socialMedia:"",
    github:""

  }
  constructor(private portfoliohome:PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfoliohome.getdata().subscribe(
      (data:any)=>{
        this.bios.firstName=data.data.firstName
        this.bios.lastName=data.data.lastName
        this.bios.about=data.data.about
        this.bios.phone=data.data.contact.phone
        this.bios.linkedIn=data.data.contact.linkedin
        this.bios.github=data.data.contact.github
        this.bios.socialMedia=data.data.contact.socialMedia
        this.bios.firstName=data.data.firstName
      })
  }


}
