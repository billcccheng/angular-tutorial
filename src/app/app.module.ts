import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { AppRoutingModule }    from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}

