import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss'],
})
export class ChoresListComponent implements OnInit {

  yesterdays = [
    { id: 1, name: 'Empty Dishwasher' },
    { id: 2, name: 'Smart Launch Code' },
    { id: 3, name: 'Buy Groceries' },
    { id: 3, name: 'Buy Groceries' },
  ];

  todays = [
    { id: 1, name: 'Load Dishwasher' },
    { id: 2, name: 'Finish Launch Code' },
    { id: 3, name: 'Buy the Groceries you forgot' },
    { id: 3, name: 'Sweeping the floor' },
    { id: 3, name: 'Gardening flowers' },
  ];

  tomorrows = [
    { id: 1, name: 'Empty Dishwasher Again' },
    { id: 2, name: 'Play With launch Code practice code' },
    { id: 3, name: 'Groceries, again' },
    { id: 3, name: 'Buy the Groceries you forgot' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
