import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
interface tuser {
 id:{},
 data:{}
}

interface allBills{
  data
}

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private afs: AngularFirestore) {}

  allTanent: Observable<tuser[]>;
  UserCol: AngularFirestoreCollection<tuser>;
  UserDoc: AngularFirestoreDocument;

  billCol:AngularFirestoreCollection;
  allBills: Observable<allBills[]>;

  getTanentList() {
    this.UserCol = this.afs.collection('tanent');
    this.allTanent = this.UserCol
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((a) => {
            const data = a.payload.doc.data() as tuser;
            const id = a.payload.doc.id;
            return  {id: id , data:data}
          })
        )
      );
      return  this.allTanent;
  }

  getBills(id){
    this.billCol=this.afs.collection(`/tanent/${id}/bills`);
    this.allBills=this.billCol.snapshotChanges()
    .pipe(
    map(actions=> {
      return actions.map(a => {
        const data = a.payload.doc.data() as allBills;
        return  {data };
      })
    }))
    
    return this.allBills;
  }
 
}
