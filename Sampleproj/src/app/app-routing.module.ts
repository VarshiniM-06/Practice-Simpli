import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from 'src/movie/movie.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [ 
  
    {path:'home',component:HomeComponent},
    {path:'movies',component:MovieComponent},
    {path:'movies/:id',component:MovieDetailComponent},
    {path:'',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'**',component:HomeComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
