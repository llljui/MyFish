import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ContentComponent } from './content';
import { ZhxsComponent } from './zhxs';
import { CxrsComponent } from './cxrs';
import { MissComponent } from './miss';
import { AboutComponent } from './about';
import { PlugsComponent } from "./plugs";

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
	component:MissComponent
},
{
	path:'about',
	component:AboutComponent
}
]