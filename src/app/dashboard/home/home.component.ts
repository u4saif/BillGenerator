import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tanents=[];
  constructor(private router:Router, private dataService: AppServiceService) { }

  ngOnInit(): void {
    this.dataService.getTanentList().subscribe((data)=> 
    {
      data.forEach((elm)=>{
        console.log(elm.data,elm.id);
        this.tanents.push({id:elm.id,data:elm.data});
      })
    });
  }
  viewDetails(id){
    console.log(id)
    this.router.navigate(['home', 'details'],{queryParams:{id:btoa(JSON.stringify(id))}
  });
}
}
