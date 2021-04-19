import { PostComponent } from './post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { PublicComponent } from './pages/public/public.component';
import { RegistersuccessComponent } from './authorization/registersuccess/registersuccess.component';
import { ResetpasswordComponent } from './authorization/resetpassword/resetpassword.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

let slug;
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'public', component: PublicComponent },
  { path: 'registersuccess', component: RegistersuccessComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post/:slug', component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
