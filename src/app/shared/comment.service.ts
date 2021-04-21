import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment, PostComment} from './comment.model'
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {environment} from 'src/environments/environment';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService) { }
  readonly baseUrl = `${environment.baseUrl}/Comment`;
  formDataComment:Comment = new Comment();
  postformDataComment:PostComment = new PostComment();
  listComment: Comment[] | any;

  async getComment(slug:any){
    const commentObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.listComment = x as Comment[];
        this.progressService.completeLoading();
      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    return await this.http.get(`${this.baseUrl}/getComment/${slug}`)
    .subscribe(commentObserver);
  }


  async postComment(){
    this.postformDataComment.userid = localStorage.getItem('userid');
 
    return await this.http.post(`${this.baseUrl}/postComment`, this.postformDataComment)
  }
}
