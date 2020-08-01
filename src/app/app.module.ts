import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//import { MatSideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PromotionService } from "./services/promotion.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import "hammerjs";

import { MatListModule } from "@angular/material/list";
import {
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from "@angular/material";

import {MaterialModule} from './shared/material.module';
 
//import { MaterialModule } from "./material.module";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { MenuComponent } from "./menu/menu.component";
import { DishService } from "./services/dish.service";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { LeaderService } from "./services/leader.service";
import { LoginComponent } from "./login/login.component";

import {HttpClientModule} from '@angular/common/http';

import {baseURL} from './shared/baseurl';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    //,AppRoutingModule ////////////////My Problem
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MaterialModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
    //MatSidenavModule,
    //MatSideToggleModule
    //FlexLayoutModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
  ,{provide: 'BaseURL', useValue: baseURL}
  ],entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent],
})
export class AppModule {}
