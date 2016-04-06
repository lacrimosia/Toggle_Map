import {Component, Inject, forwardRef} from 'angular2/core'
import {CulturalGroup} from './cultural-group'
import {Deselectable} from './deselectable'
import {AppComponent} from './app.component'

@Component ({
  selector: 'cultural-group-detail',
  templateUrl: './culture-group-detail.html',
  styleUrls: ['./styles/cultural-group.css'],
  inputs: ['culturalGroup'],

})
export class CulturalGroupDetailComponent {
  public constructor(@Inject(forwardRef(() => AppComponent)) private _parent: Deselectable){}
  culturalGroup: CulturalGroup;
  public show = false;
  hideBox() {
    this._parent.deselect();
  }
}
