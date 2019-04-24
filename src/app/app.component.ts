import { Component } from '@angular/core';

interface Transaction {
  date: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

SampleTransactionData: Transaction[] = [
  {
    date: '"2019-08-15 17:17:30.0"',
    description: 'Delhi',
    amount: 200
  },
  {
    date: '"2017-08-19 17:17:30.0"',
    description: 'Bombay',
    amount: 300
  },
  {
    date: '"2015-08-15 17:17:30.0"',
    description: 'Apple',
    amount: 400
  },
  {
    date: '"2019-08-16 17:17:30.0"',
    description: 'Zebra',
    amount: 400
  }
];

Asc() {
  this.SampleTransactionData = this.SampleTransactionData.sort((a: Transaction, b: Transaction) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

}

Desc() {
  this.SampleTransactionData = this.SampleTransactionData.sort((a: Transaction, b: Transaction) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

SortDescription() {
this.SampleTransactionData = this.SampleTransactionData.sort(this.sortbyDescriptionInAscendingAtoZ);
}

SortDescriptionZtoATest() {
  this.SampleTransactionData = this.SampleTransactionData.sort(this.sortbyDescriptionInDescendingZtoA);
}

SortAmountAtoZ() {
this.SampleTransactionData = this.SampleTransactionData.sort(this.sortAmountAtoZ);
}

SortAmountZtoA() {
  this.SampleTransactionData = this.SampleTransactionData.sort(this.sortAmountZtoA);
}

sortbyDescriptionInAscendingAtoZ(a1: Transaction, b1:Transaction) {
  //alert('sortbyDescriptionInAscendingAtoZ');
  if(a1.description > b1.description) return 1 
  else if (a1.description === b1.description) return 0
  else return -1;
}

sortbyDescriptionInDescendingZtoA(a1: Transaction, b1:Transaction) {
  if(a1.description < b1.description) return 1 
  else if (a1.description === b1.description) return 0
  else return -1;
}

sortAmountAtoZ(a1: Transaction, b1:Transaction) {
  return a1.amount - b1.amount;
}

sortAmountZtoA(a1: Transaction, b1:Transaction) {
  return b1.amount - a1.amount;
}

}
