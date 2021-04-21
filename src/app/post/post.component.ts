import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  styles: ['::slotted(img) {width:100%;height:auto;}']
})
export class PostComponent implements OnInit {
  public slug: any;
  public Loading: boolean = false;
  constructor( private progress: NgProgress,
    public progressBar: ProgressbarService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public service: PostService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.post();
    $('#commentContent').summernote({
      height: 120,
      placeholder: "Tell me, I'm listening...",
      tabDisable: true,
      dialogsInBody: true
  });
  }
  IsLoading(){
    this.Loading = true;
    console.log(this.Loading);
    setTimeout(()=>{                      
      this.Loading = false;
      console.log(this.Loading);
 }, 2000);
  }
  post(){
    this.service.postDetails(this.slug);
  }
  transformYourHtml(htmlTextWithStyle:any) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
}
  isAdmin(): boolean {
    return this.authService.currentUser.role == 'Administrator' ? true : false;
  }

  isManager(): boolean {
    return this.authService.currentUser.role == 'Manager' ? true : false;
  }
  isLogined(): boolean {
    return this.authService.isLoggedIn ? true : false;
  }
  
}
