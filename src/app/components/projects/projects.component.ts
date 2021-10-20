import { Component, Input, OnInit } from '@angular/core';
import { Projectlist } from 'src/app/_models/projectlist';
import { PortfolioServiceService } from 'src/app/_services/portfolioService.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() pro:Projectlist
  constructor(private portfolio:PortfolioServiceService) {
    this.pro = {} as Projectlist
  }

  ngOnInit(): void {
    this.portfolio.getdata().subscribe(
      (data:any)=>{
        this.pro.projects = data.data.projects
        console.log(this.pro.projects)
      }
    )
  }





}
