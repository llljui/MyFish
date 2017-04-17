import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { rootRouterConfig } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ZhxsComponent } from './zhxs/zhxs.component';
import { CxrsComponent } from './cxrs/cxrs.component';
import { MissComponent } from './miss/miss.component';
import { AboutComponent } from './about/about.component';

let rootRouterModule:ModuleWithProviders=RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ZhxsComponent,
    CxrsComponent,
    MissComponent,
    AboutComponent
  ],
  imports: [
    rootRouterModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
