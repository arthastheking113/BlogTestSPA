import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Category } from '../shared/category.model';
import { ToastrService } from 'ngx-toastr';
import { PostService } from './../shared/post.service';
@Component({
  selector: 'app-vertical-side-bar-category',
  templateUrl: './vertical-side-bar-category.component.html',
  styleUrls: ['./vertical-side-bar-category.component.css']
})
export class VerticalSideBarCategoryComponent implements OnInit {

  constructor(public service: CategoryService,
    authService: AuthService,
     private toastr: ToastrService,
     private PostService: PostService,
     private router: Router) { }

  ngOnInit(): void {
    this.service.getCategory();
  }
  gotoCategory(id: any){
    this.PostService.searchData.categoryids = id;
    localStorage.setItem('categoryids', id);
    this.router.navigate(['']);
    this.PostService.getpost();
  }
}
