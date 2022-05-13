import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { WineComponent } from './wine/wine.component';
import { CategoryComponent } from './category/category.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { AccountComponent } from './account/account.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HeroComponent } from './hero/hero.component';
import { ControlsComponent } from './controls/controls.component';
import { ControlButtonComponent } from './control-button/control-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    CategoryComponent,
    PrimaryNavComponent,
    AccountComponent,
    HeroContentComponent,
    NavLinkComponent,
    HeroComponent,
    ControlsComponent,
    ControlButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
