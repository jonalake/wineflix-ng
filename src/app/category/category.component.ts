import { Component, Input } from '@angular/core';
import { WINES } from '../wines';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  {
  @Input() category: string = "";

  finishedWines = WINES.filter(wine => wine.isFinished)
  inProgressWines = WINES.filter(wine => !!wine.progress)
}
