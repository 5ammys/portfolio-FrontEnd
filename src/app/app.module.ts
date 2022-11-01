import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import {HttpClientModule} from '@angular/common/http'
import  {AuthInterceptor, authInterceptorProvider} from './services/auth.interceptor';

import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ObjToArray } from './services/pipe';
import { RegisterComponent } from './components/register/register.component';
import { ExpModComponent } from './components/modals/exp/exp-mod/exp-mod.component';
import { EduModComponent } from './components/modals/exp/edu-mod/edu-mod.component';
import { EduEditDeleteComponent } from './components/buttons/edu-edit-delete/edit-delete.component';
import { EduAddComponent } from './components/buttons/addEdu/add.component';
import { ExpAddComponent } from './components/buttons/addExp/add.component';
import { ExpEditDeleteComponent } from './components/buttons/exp-edit-delete/edit-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    ObjToArray,
    RegisterComponent,
    ExpModComponent,
    EduModComponent,
    EduEditDeleteComponent,
    ExpEditDeleteComponent,
    EduAddComponent,
    ExpAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
