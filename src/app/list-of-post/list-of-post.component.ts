import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Post } from '../shared/post.model';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../shared/post.service';
import { Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Search } from '../shared/search.model';
@Component({
  selector: 'app-list-of-post',
  templateUrl: './list-of-post.component.html',
  styleUrls: ['./list-of-post.component.css']
})
export class ListOfPostComponent implements OnInit {

  items:any = [];
  pageOfItems: Array<any>;

  constructor(public service: PostService,
    authService: AuthService,
     router: Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getpost();
    this.items = this.service.listPosts;
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
