import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForeverComponent } from './pages/forever/forever.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'forever', component: ForeverComponent},
    {path: 'shopping', component: ShoppingComponent},
    {path: 'details', component: DetailsComponent},
]
