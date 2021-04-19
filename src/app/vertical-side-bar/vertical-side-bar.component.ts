import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgProgress } from 'ngx-progressbar';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vertical-side-bar',
  templateUrl: './vertical-side-bar.component.html',
  styleUrls: ['./vertical-side-bar.component.css']
})
export class VerticalSideBarComponent implements OnInit {

  constructor(private progress: NgProgress,
    public progressBar: ProgressbarService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public PostService: PostService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.PostService.searchData.search = form.value.search; 
    this.PostService.getpost();
  }
}
