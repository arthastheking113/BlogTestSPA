import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model'
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  
  constructor(private http: HttpClient) { }
  
  readonly baseUrl = 'https://duylanle-blog.herokuapp.com/Post';
  postData:Post = new Post();
  listPosts:Post[] = new Array().fill(0).map((x, i) => ({ id: (i), title: x.title,abstract: x.abstract, content: x.content, createDate: x.createDate, updateDate: x.updateDate,slug :x.slug,image:x.image,viewCount:x.viewCount,commentCount:x.commentCount,categoryid:x.categoryid,category:x.category}));
  verticalPost:Post[];
  searchData:Search = new Search();
  pageOfItems: Array<any>;

  
  getpost(){
    const postsObserver = {
      next: (x: any) => {
        this.listPosts = x;
      },
      error: (err: any) => {
        console.log(err);
      },
    };
    // this.http.post(`${this.baseUrl}/getpost`, this.searchData)
    // .toPromise()
    // .then(res => this.listPosts = res as Post[]);
    // this.listPosts = Array(150).fill(0).map((x, i) => ({ id: (i), title: x.title,abstract: x.abstract, content: x.content, createDate: x.createDate, updateDate: x.updateDate,slug :x.slug,image:x.image,viewCount:x.viewCount,commentCount:x.commentCount,categoryid:x.categoryid,category:x.category}));
    this.http.post(`${this.baseUrl}/getpost`, this.searchData).subscribe(postsObserver);
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  getRandom4Posts(){
    this.http.get(`${this.baseUrl}/getRandom4Posts`)
    .toPromise()
    .then(res => this.verticalPost = res as Post[]);
  }

  postDetails(slug: any){
    this.http.get(`${this.baseUrl}/postdetails/${slug}`)
    .subscribe(res => this.postData = res as Post);
  }

}
