import { Component, Input, OnInit, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() billTableData:any; 

  constructor() { }

  ngOnInit(): void {
    console.log("hi", this.billTableData);
    var data=["09/06/2015", "25/06/2015", "22/06/2015", "25/07/2015", "18/05/2015"];
    var sortedDate=data.sort(function(a,b) {
      a = a.split('/').reverse().join('');
      b = b.split('/').reverse().join('');
      return a > b ? 1 : a < b ? -1 : 0;
    });
    console.log(sortedDate.reverse());
  }

}
