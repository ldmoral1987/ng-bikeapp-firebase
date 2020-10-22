import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderManagmentService } from './Services/order-managment.service';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [OrderManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
