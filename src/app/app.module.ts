import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { ContainedComponent } from './contained/contained.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BasicComponent,
        ContainedComponent,
        AdvancedComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
