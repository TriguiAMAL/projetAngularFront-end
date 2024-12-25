import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    
    component:HomeComponent
  },
  {
    path:'dashboard',
   
    component:DashboardComponent
  },
  {
    path:'member',
    
    component:MemberComponent
  },
  {
    path:'events',
    
    component:EventsComponent
  },
  {
    path:'tools',
   
    component:ToolsComponent
  },
  {
    path:'articles',
   
    component:ArticlesComponent
  },
  {
    path:'create',
    
    component:MemberFormComponent
  },

  {
    path:'',
    pathMatch:"full",
    component:LoginComponent
  },

{
  path:':id/edit',
  pathMatch:"full",
  component:MemberFormComponent
},

  {
    path:'**',
    component:MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
