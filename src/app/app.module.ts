import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ListUserComponent } from './body/list-user/list-user.component';
import { HeaderComponent } from './header/header.component';
import { AngformComponent } from './form/angform/angform.component';
import { FormsModule } from '@angular/forms';
import { ExPipePipe } from './ex-pipe.pipe';
import { LoginComponent } from './body/login/login.component';
import { ForgetPasswordComponent } from './body/forget-password/forget-password.component';
import { OurpipePipe } from './pipe/ourpipe.pipe';
import { ExerpipeComponent } from './exerpipe/exerpipe.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ListUserComponent,
    HeaderComponent,
    AngformComponent,
    ExPipePipe,
    LoginComponent,
    ForgetPasswordComponent,
    OurpipePipe,
    ExerpipeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
