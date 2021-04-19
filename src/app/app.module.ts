import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgProgressModule} from 'ngx-progressbar'
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { PublicComponent } from './pages/public/public.component';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './authorization/auth.module';
import { AlertModule } from 'ngx-alerts';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { VerticalSideBarComponent } from './vertical-side-bar/vertical-side-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { VerticalSideBarCategoryComponent } from './vertical-side-bar-category/vertical-side-bar-category.component';
import { VerticalSideBarRecentPostComponent } from './vertical-side-bar-recent-post/vertical-side-bar-recent-post.component';
import { HeaderCategoryComponent } from './header-category/header-category.component';
import { CommentComponent } from './comment/comment.component';
import { ListOfPostComponent } from './list-of-post/list-of-post.component';
import { JwPaginationComponent } from 'jw-angular-pagination';  
import { JwPaginationModule } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    PublicComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PostComponent,
    VerticalSideBarComponent,
    VerticalSideBarCategoryComponent,
    VerticalSideBarRecentPostComponent,
    HeaderCategoryComponent,
    CommentComponent,
    ListOfPostComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    AuthModule,
    NgProgressModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    JwPaginationModule
  ],
  exports: [
    VerticalSideBarComponent, 
    HomeComponent, 
    PostComponent,
    VerticalSideBarCategoryComponent,
    VerticalSideBarRecentPostComponent,
    HeaderCategoryComponent,
    CommentComponent,
    ListOfPostComponent
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
