import {   
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument, } from '@angular/fire/firestore';
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
  isGenBill:boolean = false;
  cread;
  pread=0;
  date= new Date().toLocaleDateString();
  unit=0;
  amount=10;
  billTableData:any =[];

  constructor(private dataService: AppServiceService,private route:ActivatedRoute, private afs:AngularFirestore) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe((param)=>{
        this.id=JSON.parse(atob(param.id));
       
      });
     this.dataService.getBills(this.id).subscribe((a)=> {
       a.forEach((b)=>{
        this.billTableData.push(b.data);
       });
       
      });
     this.dataService.getTanentList().subscribe((users)=>{
      users.forEach((user)=>{
        if(user.id==this.id) { this.userArr.push(user)};
        
      })
     })
    
  }

  GenBill(id){
    this.isGenBill=true;
    console.log("hi", this.billTableData);
 
  }

  close(){
    this.isGenBill=false;
  }
  done(){
    this.afs.collection(`/tanent/${this.id}/bills`).add({'cread':this.cread,'pread':this.pread,'date':this.date,'unit':this.unit,'amount':this.amount});
    alert('User Created Sucessfully!');
    this.cread=null;
    this.isGenBill=false;
    
  }


}
