import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
})
export class BeerComponent implements OnInit {

  host: string = 'http://localhost:8030/';
  error: string = '';

  idBeer: number = 1;
  beer: any = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getBeer(id: number) {

   return this.http.get(`${this.host}/api/v1/beer/{id}`);


  }
}
