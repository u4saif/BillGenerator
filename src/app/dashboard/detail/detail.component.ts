import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AppServiceService } from './../../services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
 
  id: string;
  userArr = [];
  isGenBill: boolean = false;
  cread=null;
  pread = 0;
  date = new Date().toLocaleString();
  unit = 0;
  amount = 0;
  payStaus:boolean=false;
  billTableData: any = [];
  isPay: boolean;
  isLoaded:boolean=false;
  invalidCread:boolean=false;
  constructor(
    private dataService: AppServiceService,
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.isLoaded=true;
    this.route.queryParams.subscribe((param) => {
      this.id = JSON.parse(atob(param.id));
    });
    this.dataService.getBills(this.id).subscribe((a) => {
      this.billTableData = [];
      a.forEach((b) => {
        this.billTableData.push(b.data);
      });
      this.billTableData
        .sort((a, b) => {
          let c = new Date(a.date).toLocaleString();
          let d = new Date(b.date).toLocaleString();
          return c > d ? 1 : c < d ? -1 : 0;
        })
        .reverse();
        this.pread=this.billTableData[0]?.cread | 0;
        this.isLoaded=false;

    });
    this.dataService.getTanentList().subscribe((users) => {
      users.forEach((user) => {
        if (user.id == this.id) {
          this.userArr.push(user);
        }
      });
    });
  }

  GenBill(id) {
    this.isGenBill = true;
  }

  close() {
    this.isGenBill = false;
  }
  done() {
    if(this.cread== null){
      alert("pelase enter reading");
      return;
    }
    this.afs
      .collection(`/tanent/${this.id}/bills`)
      .add({
        cread: this.cread,
        pread: this.pread,
        date: this.date,
        unit: this.unit,
        amount: this.amount,
        payStatus:this.payStaus
      });
    alert('User Created Sucessfully!');
    this.cread = null;
    this.unit=0;
    this.amount=0;
    this.isGenBill = false;
  }

  calAmt(val){
    (this.cread < this.pread)? this.invalidCread=true: this.invalidCread=false;
    this.unit= Number(this.cread)-Number(this.pread);
    this.amount= this.unit*7;
  }

  updateBillSatus(Bid: string) {

    this.afs
      .doc(`/tanent/${this.id}/bills/${Bid}`)
      .update({  
        payStatus: true
      });
    alert('Bill Paid Sucessfully!');
    //this.isPay = false;
  }
}
