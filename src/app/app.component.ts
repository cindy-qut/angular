import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TitleService } from './service/title.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mon applis';
  events: string[] = [];
  opened: boolean;
  shouldRun = true;
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private titleService: TitleService) { }
  ngOnInit(): void {
    this.titleService.init();
  }
}


