import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [

  {path:'', component: MainpageComponent},
  {path:'second', component: SecondPageComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
