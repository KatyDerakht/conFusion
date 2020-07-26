import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarModule } from '@angular/material/toolbar'; 
import 'hammerjs';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule, MatCardModule, MatGridListModule } from 
'@angular/material';

import { MaterialModule } from './material.module';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import {DishService}  from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';




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
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
     MatGridListModule,
     MatListModule,
     MaterialModule,
     AppRoutingModule
    //FlexLayoutModule
    
  ],
  providers: 
  [DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
