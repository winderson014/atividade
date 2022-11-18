import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CursoComponent } from './components/curso/curso.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CursoComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
