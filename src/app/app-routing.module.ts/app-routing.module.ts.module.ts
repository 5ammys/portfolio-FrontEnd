import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { WatchmenGuard } from '../services/watchmen.guard';
import { ExpModComponent } from '../components/modals/exp/exp-mod/exp-mod.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[WatchmenGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    component:ExpModComponent,
    path:'update/:id'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
