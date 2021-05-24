import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:string;
  userArr=[];
  constructor(private dataService: AppServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe((param)=>{
        this.id=JSON.parse(atob(param.id));
      });
     this.dataService.getTanentList().subscribe((users)=>{
      users.forEach((user)=>{
        if(user.id==this.id) { this.userArr.push(user)};
        
      })
     })
    console.log(this.userArr);
  }

}
