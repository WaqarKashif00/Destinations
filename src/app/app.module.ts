import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';
import { SecondPageComponent } from './components/second-page/second-page.component';    
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainpageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    NgbModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,

    MatButtonModule,
    MatTableModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
