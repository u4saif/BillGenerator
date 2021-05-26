import { Component, Input, OnInit, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() billTableData:any; 
@Output() updateBill = new EventEmitter<string>();
  isModel:boolean = false;
  IDvalue:string = '';
  sortedList:any = [];
  password:any = null;
  isIncorectPass:boolean = false;
  constructor() { }

  ngOnInit(): void {
  
  }
  
  update(IDvalue: string) {
    this.isModel=true;
    this.IDvalue=IDvalue;
    
  }

  pay(){
    if(this.password=='sana'){
      this.updateBill.emit(this.IDvalue);
      this.password=null;
      this.isModel=false;
    }else{
      this.password=null;
      this.isIncorectPass = true;

    }
     
    
  }
  close(){
    this.isModel=false;
  }
}
