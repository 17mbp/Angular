import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container.component';
import { HomeOpcion2Component } from './home-opcion2/home-opcion2.component';
import { HomeComponent } from './home/home.component';
const homeRoutes: Routes =[
{
  path: '',
  component: HomeContainerComponent,
  children: [
    {
      path: 'home1',
      component: HomeComponent
    },
    {
      path: 'home2',
      component: HomeOpcion2Component
    }
  ]
}];
@NgModule({
  imports: [  
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }