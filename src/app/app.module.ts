import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./pages/login/login.component";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MyInterceptorService } from "./services/my-interceptor.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapsComponent } from "./pages/maps/maps.component";
import { MapProductComponent } from "./pages/map-product/map-product.component";
import { MapClientComponent } from "./pages/map-client/map-client.component";
import { MapTransactionComponent } from "./pages/map-transaction/map-transaction.component";
import { MapAdressComponent } from "./pages/map-adress/map-adress.component";
import { AddImageProductComponent } from "./pages/add-image-product/add-image-product.component";
import { SuccessDialogComponent } from "./pages/success-dialog/success-dialog.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    MapsComponent,
    MapProductComponent,
    MapClientComponent,
    MapTransactionComponent,
    MapAdressComponent,
    AddImageProductComponent,

    SuccessDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
