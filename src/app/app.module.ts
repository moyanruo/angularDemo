import { BrowserModule } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'; 
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module'
import { RouteguardService } from './routes/routeguard.service';
import { DefaultInterceptor } from '@core/net/default.interceptor';
import { StartupService } from '@core/startup/startup.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    StartupService,
    RouteguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
