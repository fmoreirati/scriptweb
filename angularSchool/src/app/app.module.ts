import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';
import { FormUsuarioComponent } from './pages/form-usuario/form-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    PageHeaderComponent,
    PageFooterComponent,
    FormUsuarioComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
