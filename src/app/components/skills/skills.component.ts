import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/_models/skills';
import { PortfolioServiceService } from 'src/app/_services/portfolioService.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  mySkills:Skills[] = [];

  constructor(private portfolioSkillsservice: PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfolioSkillsservice.getdata().subscribe(
      (data:any)=>{
        console.log(this.mySkills=data.data.skills)
      }
    )
  }

}
