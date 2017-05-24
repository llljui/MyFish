import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ContentComponent } from './content';
import { ZhxsComponent } from './zhxs';
import { CxrsComponent } from './cxrs';
import { MissComponent } from './miss';
import { AboutComponent } from './about';
import { PlugsComponent } from "./plugs";
import { AdminComponent } from "./admin" ;

export const rootRouterConfig: Routes = [
{
	path:'',
	redirectTo:'home',
	pathMatch:'full'
},
{
path:'home',
component:HomeComponent
},
{
path:'content',
component:ContentComponent
},
{path:'zhxs',
component:ZhxsComponent,},
{
	path:'cxrs',
	component:CxrsComponent
},
{
	path:'miss',
	component:MissComponent
},
{
	path:'plugs',
	component:PlugsComponent
},
{
	path:'about',
	component:AboutComponent
},
{
	path:'admin',
	component:AdminComponent
}
]