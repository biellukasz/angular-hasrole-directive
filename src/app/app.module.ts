import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HasRoleDirective } from './has-role.directive';
import { AuthService } from './auth.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HasRoleDirective ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
