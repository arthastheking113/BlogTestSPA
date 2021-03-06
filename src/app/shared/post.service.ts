import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model'
import { Search } from './search.model';
import {environment} from 'src/environments/environment';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
@Injectable({
  providedIn: 'root'
})

export class PostService {

  
  constructor(private http: HttpClient,
    private progressService: ProgressbarService,
    private alertService: AlertService) { }
  
  readonly baseUrl = `${environment.baseUrl}/Post`;
  postData:Post | any= new Post();
  listPosts:Post[] = new Array().fill(0).map((x) => ({ id: x.id, title: x.title,abstract: x.abstract, content: x.content, createDate: x.createDate, updateDate: x.updateDate,slug :x.slug,image:x.image,viewCount:x.viewCount,commentCount:x.commentCount,categoryid:x.categoryid,category:x.category}));
  verticalPost:Post[];
  searchData:Search = new Search();
  pageOfItems: Array<any>;

  
  async getpost(){
    this.progressService.startLoading();
    this.alertService.info('Getting Posts');
    const getPostsObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.listPosts = x as Post[];
        
        this.progressService.completeLoading();

      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    return await this.http.post(`${this.baseUrl}/getpost`, this.searchData)
    .subscribe(getPostsObserver);
  }
  async onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  async getRandom4Posts(){
    return this.verticalPost = this.pageOfItems as Post[];
  }
  shuffle(array: any) {
    
  
    return array;
  }
  shuffleVerticalPost(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array.slice(0,4);
  }
  async postDetails(slug: any){
    this.progressService.startLoading();
    this.alertService.info('Getting Post Details');
    if(this.listPosts.length == 0){
    
      const getPostsDetailsObserver = {
        next: (x: any) => {
          this.progressService.setSuccess();

          this.postData = x as Post
          
          this.progressService.completeLoading();
  
        },
        error: (err: any) => {
          this.progressService.setFailure();
         
          console.log(err);
          this.alertService.danger(err.error);
          this.progressService.completeLoading();
        },
      };
      return await this.http.get(`${this.baseUrl}/postdetails/${slug}`)
        .subscribe(getPostsDetailsObserver);
    }
    const getPostsDetailsObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        
        this.progressService.completeLoading();

      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    await this.http.get(`${this.baseUrl}/postdetailsViewIncrease/${slug}`).subscribe(getPostsDetailsObserver);
    this.postData =  this.listPosts.find(x => x.slug == slug);
    var viewCount = (Number(`${this.postData.viewCount}`) + 1).toString();
    this.postData.viewCount = viewCount;
    return this.postData;
  }

}
