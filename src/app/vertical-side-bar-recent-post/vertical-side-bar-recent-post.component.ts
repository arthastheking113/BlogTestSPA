import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Post } from '../shared/post.model';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../shared/post.service';
@Component({
  selector: 'app-vertical-side-bar-recent-post',
  templateUrl: './vertical-side-bar-recent-post.component.html',
  styleUrls: ['./vertical-side-bar-recent-post.component.css']
})
export class VerticalSideBarRecentPostComponent implements OnInit {

  constructor(public service: PostService,
    authService: AuthService,
     router: Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getRandom4Posts();
  }

}
