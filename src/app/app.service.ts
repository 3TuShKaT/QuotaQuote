import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseApiUrl = "https://thequoteshub.com/api/" 

  constructor (private http: HttpClient){}

  getQuoteOfTheDay(): Observable<Quote> {
    return this.http.get<Quote>(`${this.baseApiUrl}random-quote?format=json`);
  }
}
