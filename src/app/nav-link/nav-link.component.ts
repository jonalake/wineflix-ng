import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent  {
  @Input() name!: string;
  @Input() url!: string;
  @Input() class?: string;
}
