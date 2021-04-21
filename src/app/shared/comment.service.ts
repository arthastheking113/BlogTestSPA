import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment, PostComment} from './comment.model'
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,) { }
  readonly baseUrl = `${environment.baseUrl}/Comment`;
  formDataComment:Comment = new Comment();
  postformDataComment:PostComment = new PostComment();
  listComment: Comment[] | any;

  async getComment(slug:any){
    return await this.http.get(`${this.baseUrl}/getComment/${slug}`)
    .toPromise()
    .then(res => this.listComment = res as Comment[] | any);
  }


  async postComment(){
    this.postformDataComment.userid = localStorage.getItem('userid');
 
    return await this.http.post(`${this.baseUrl}/postComment`, this.postformDataComment)
  }
}
