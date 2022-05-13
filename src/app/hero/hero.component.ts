import { Component } from '@angular/core';
import { heroContent } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroImg = heroContent.heroImage
}
