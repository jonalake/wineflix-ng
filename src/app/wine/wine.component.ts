import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent {
  @Input() label!: string;
  @Input() imageURL!: string;
  @Input() isNew?= false;
  @Input() inProgress?= false;
  @Input() progress?: number;
}
