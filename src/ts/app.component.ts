import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Deselectable} from './deselectable';
import {CulturalGroup} from './cultural-group';
import {CulturalGroupDetailComponent} from './cultural-group-detail.component';
import {culturalGroupsData} from './cultural-groups-data';
import {SpaceToBreakPipe} from './space-to-break-pipe';

const KEY_SPACE: number = 32;
const KEY_ENTER: number = 13;
const KEY_ESC: number = 27;


@Component({
  host: {
    '(document:keyup)': '_keyup($event)',
  },
  selector: 'my-app',
  templateUrl: './app-component.html',
  styleUrls: ["./styles/app.component.css"],
  directives: [CulturalGroupDetailComponent],
  providers:[AppComponent],
  pipes: [SpaceToBreakPipe]
})

export class AppComponent implements OnInit, Deselectable{


  public title = 'Culture Group Viewer';
  public width = 700;
  public height= 571;

  public culturalGroups: CulturalGroup[];
  public selectedCulturalGroup: CulturalGroup;


  pressKey(keyCode, group) {
    if(keyCode === KEY_SPACE || keyCode === KEY_ENTER) {
      this.toggleGroup(group);
    }
  }

  backgroundClick(event) {
    // this.selectedCulturalGroup = this.instructionsGroup;
    /* console.log("{\"x\": " + event.pageX + ", \"y\": " + event.pageY + "}");
     if (this.selectedCulturalGroup) {
       this.selectedCulturalGroup.point = { "x": event.pageX, "y": event.pageY};
      console.log(JSON.stringify(this.culturalGroups));
     }*/
     this.deselect();
  }

toggleGroup(group: CulturalGroup) {
  if (this.isSelected(group)) {
    this.deselect();
  } else {
    this.selectGroup(group);
  }
}

  selectGroup(culturalGroup: CulturalGroup) {
    this.selectedCulturalGroup = culturalGroup;
  }

  deselect() {
    this.selectedCulturalGroup = null;
  }

  isSelected(group: CulturalGroup) {
    return this.selectedCulturalGroup == group;
  }

  noneSelected() {
    return this.selectedCulturalGroup == null;
  }

  private _keyup(event) {
    if (event.keyCode == KEY_ESC) {
      this.deselect();
    }

  }

  ngOnInit() {
    this.culturalGroups = culturalGroupsData.sort((a,b) => a.tabOrder - b.tabOrder);
  }

}
