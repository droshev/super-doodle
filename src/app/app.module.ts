import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RtlService, DynamicComponentService } from '@fundamental-ngx/core/utils';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { MultiInputModule } from '@fundamental-ngx/core/multi-input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MultiInputModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [RtlService, DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
