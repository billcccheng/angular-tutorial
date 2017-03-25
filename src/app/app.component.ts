import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
          <li *ngFor="let hero of heroes" 
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero"
            >
            <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    providers: [HeroService]
})

export class AppComponent { 
    title = 'Tours of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService){};
}



