import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { rootRouterConfig } from './app.router';
import { ModalModule } from '._ngx-bootstrap@1.6.6@ngx-bootstrap/modal';
import { JsonpModule } from '@angular/http';
import { BaiduMapModule } from "angular2-baidu-map";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ZhxsComponent } from './zhxs/zhxs.component';
import { CxrsComponent } from './cxrs/cxrs.component';
import { MissComponent } from './miss/miss.component';
import { AboutComponent } from './about/about.component';
import { PlugsComponent } from './plugs/plugs.component';
import { AdminComponent } from './admin/admin.component';

let rootRouterModule:ModuleWithProviders=RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ZhxsComponent,
    CxrsComponent,
    MissComponent,
    AboutComponent,
    PlugsComponent,
    AdminComponent,

  ],
  imports: [
    ModalModule.forRoot(),
    rootRouterModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    BaiduMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
