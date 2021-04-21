import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './category.model'
import {environment} from 'src/environments/environment';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private progressService: ProgressbarService,
    private alertService: AlertService) { }
  readonly baseUrl = `${environment.baseUrl}/Category`;

  list:Category[];
  async getCategory(){
    const categoryObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.list = x as Category[];  
        this.progressService.completeLoading();
      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    return await this.http.get(`${this.baseUrl}/getcategory`)
    .subscribe(categoryObserver)
  }

  async getCategoryPost(){
    const categoryObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.list = x as Category[];  
        this.progressService.completeLoading();
      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    return await this.http.get(`${this.baseUrl}/getcategory`)
    .subscribe(categoryObserver)
  }
}
