import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginInterceptor } from './shared/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ListUsersComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : LoginInterceptor, multi : true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
