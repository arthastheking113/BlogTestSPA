import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment, PostComment} from './comment.model'
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,) { }
  readonly baseUrl = 'https://duylanle-blog.herokuapp.com/Comment';
  formDataComment:Comment = new Comment();
  postformDataComment:PostComment = new PostComment();
  listComment: Comment[];

  getComment(slug:any){
    return this.http.get(`${this.baseUrl}/getComment/${slug}`)
    .toPromise()
    .then(res => this.listComment = res as Comment[]);
  }


  postComment(){
    this.postformDataComment.userid = localStorage.getItem('userid');
 
    return this.http.post(`${this.baseUrl}/postComment`, this.postformDataComment)
  }
}
