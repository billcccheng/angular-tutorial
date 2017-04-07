import { Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    //animations: [
      //trigger('flyInOut', [
        //state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
        //transition('void => *', [
          //style({width: 10, transform: 'translateX(50px)', opacity: 0}),
          //group([
            //animate('0.3s 0.1s ease', style({
              //transform: 'translateX(0)',
              //width: 120
            //})),
            //animate('0.3s ease', style({
              //opacity: 1
            //}))
          //])
        //]),
        //transition('* => void', [
          //group([
            //animate('0.3s ease', style({
              //transform: 'translateX(50px)',
              //width: 10
            //})),
            //animate('0.3s 0.2s ease', style({
              //opacity: 0
            //}))
          //])
        //])
      //])
    //]
})

export class HeroesComponent { 
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {};

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    
    selectHero(): void{
        let id = this.getRandom();
        this.router.navigate(['/detail', id]);
    }

    getRandom(): number{
        let min = 1;
        let max = Math.floor(this.heroes.length);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

