import { Component, Input } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css']
})
export class ControlButtonComponent  {
  faPlay = faPlay
  faInfoCircle = faInfoCircle

  @Input() class!: string;
  @Input() text!: string;
}
