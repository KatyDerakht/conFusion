import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatToolbarModule } from '@angular/material/toolbar'; 
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule, MatCardModule, MatGridListModule } from 
'@angular/material';

import { MaterialModule } from './material.module';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import {DishService}  from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
     MatGridListModule,
     MatListModule,
     MaterialModule
    //FlexLayoutModule
    
  ],
  providers: 
  [DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
