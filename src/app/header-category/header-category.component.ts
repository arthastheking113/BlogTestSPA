import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Category } from '../shared/category.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.css']
})
export class HeaderCategoryComponent implements OnInit {

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
    this.router.navigate(['']);
    this.PostService.getpost();
  }
  getAll(){
    this.PostService.searchData.categoryids = 0;
    this.PostService.searchData.search = '';
    this.router.navigate(['']);
    this.PostService.getpost();
  }
}
