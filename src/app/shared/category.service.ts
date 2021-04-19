import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './category.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = 'https://duylanle-blog.herokuapp.com/Category';

  list:Category[];
  async getCategory(){
    return await this.http.get(`${this.baseUrl}/getcategory`)
    .toPromise()
    .then(res => this.list = res as Category[]);
  }

  async getCategoryPost(){
    return await this.http.get(`${this.baseUrl}/getcategory`)
    .toPromise()
    .then(res => this.list = res as Category[]);
  }
}
