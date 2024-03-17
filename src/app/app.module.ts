import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";


import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from "./pages/login/login.component";

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptorService } from "./services/my-interceptor.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";






@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  
   
    
    


  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
