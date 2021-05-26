import { Component, Input, OnInit, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() billTableData:any; 
@Output() updateBill = new EventEmitter<string>();

  sortedList:any = [];
  constructor() { }

  ngOnInit(): void {
  
  }

  updatePayment(id){

  }
  
  
  update(IDvalue: string) {
    this.updateBill.emit(IDvalue);
  }

}
