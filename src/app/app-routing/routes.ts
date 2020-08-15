import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {DishdisplayComponent} from '../menu/dishdisplay/dishdisplay.component'
export const routes : Routes=[
    {path:'home' , component:HomeComponent},
    {path:'menu' , component:MenuComponent},
    {path:'dishdetails/:id' , component:DishdisplayComponent},
    {path:'contactus' , component:ContactComponent},
    {path:'aboutus' , component:AboutComponent},
    {path:'menu' , component:MenuComponent},
    {path:'' , redirectTo:  '/home',pathMatch:'full'},
 
]