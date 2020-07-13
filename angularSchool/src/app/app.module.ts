import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
