// import { Component, OnInit } from '@angular/core';
 
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
 
// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.scss']
// })
// export class HeroesComponent implements OnInit {
//   heroes: Hero[];
 
//   constructor(private heroService: HeroService) { }
 
//   ngOnInit() {
//     this.getHeroes();
//   }
 
//   getHeroes(): void {
//     this.heroService.getHeroes()
//     .subscribe(heroes => this.heroes = heroes);
//   }
 
//   add(name: string): void {
//     name = name.trim();
//     if (!name) { return; }
//     this.heroService.addHero({ name } as Hero)
//       .subscribe(hero => {
//         this.heroes.push(hero);
//       });
//   }
 
//   delete(hero: Hero): void {
//     this.heroes = this.heroes.filter(h => h !== hero);
//     this.heroService.deleteHero(hero).subscribe();
//   }
 
// }







// <!-- DEAD CODE KEPT FOR EDUCATIONAL PURPOSES -->



import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // selectedHero: Hero;

  // heroes = HEROES;
    
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }  

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);

    this.heroService.deleteHero(hero).subscribe();
  }

}
