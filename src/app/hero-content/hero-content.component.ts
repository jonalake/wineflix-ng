import { Component } from '@angular/core';

import { heroContent } from '../hero';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent{
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = heroContent.title
  imgURL = heroContent.imageUrl
  subtitle = heroContent.subtitle
  description = heroContent.description
}
