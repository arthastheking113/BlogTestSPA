import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './category.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = 'https://localhost:44368/Category';

  list:Category[];
  getCategory(){
    this.http.get(`${this.baseUrl}/getcategory`)
    .toPromise()
    .then(res => this.list = res as Category[]);
  }

  getCategoryPost(){
    this.http.get(`${this.baseUrl}/getcategory`)
    .toPromise()
    .then(res => this.list = res as Category[]);
  }
}
