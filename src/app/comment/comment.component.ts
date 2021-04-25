import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CommentService} from '../shared/comment.service';
import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { PostComment } from '../shared/comment.model';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public slug: any;
  constructor(private progress: NgProgress,
    public progressBar: ProgressbarService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public service: CommentService,
    public PostService: PostService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.getComment();
  }

  getComment(){
   this.service.getComment(this.slug);
  }
  transformYourHtml(htmlTextWithStyle:any) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }

  loggedIn(): boolean {
    var token: any = localStorage.getItem('token');
    if(token != null){
      return true;
    }else{
      return false;
    }
    // return !this.helper.isTokenExpired(token);
  }
  async onSubmit(form: NgForm){
    this.service.postformDataComment.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.service.postformDataComment.content = form.value.content; 
    // console.log(this.service.postformDataComment.content);
    if(form.value.content.length < 8){
      this.toastr.error('Please Enter At Least 8 character', 'Error');
    }else{
      await (await this.service.postComment()).subscribe(
        async res => {
          this.resetForm(form);
          this.toastr.success('Thank you for adding a comment <3!', 'Successfully Comment');
          await this.getComment();
          form.form.reset();
        },
        async err =>{this.toastr.error(err.error, 'Error');
          console.log(err);}
      );
    }
  }

  async resetForm(form: NgForm){
    await form.form.reset;
    this.service.postformDataComment = new PostComment();
  }
  
}
