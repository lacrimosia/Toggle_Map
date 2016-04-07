import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Layer} from './layer';
import {layerData} from './layer-data';
import {SpaceToBreakPipe} from './space-to-break-pipe';

const KEY_SPACE: number = 32;
const KEY_ENTER: number = 13;



@Component({
  selector: 'my-app',
  templateUrl: './app-component.html',
  styleUrls: ["./styles/app.component.css"],
  providers:[AppComponent],
  pipes: [SpaceToBreakPipe]
})

export class AppComponent implements OnInit{


  public title = 'Culture Group Viewer';
  public width = 700;
  public height= 571;

  public layers: Layer[];
  public selectedLayer: Layer;
  public showAnimations: boolean;

  pressKey(keyCode, group) {
    if(keyCode === KEY_SPACE || keyCode === KEY_ENTER) {
      this.selectLayer(group);
    }
  }

  backgroundClick(event) {
    // this.selectedCulturalGroup = this.instructionsGroup;
    /* console.log("{\"x\": " + event.pageX + ", \"y\": " + event.pageY + "}");
     if (this.selectedCulturalGroup) {
       this.selectedCulturalGroup.point = { "x": event.pageX, "y": event.pageY};
      console.log(JSON.stringify(this.culturalGroups));
     }*/

  }

selectLayer(layer: Layer) {
    this.showAnimations = true;
    this.selectedLayer = layer;
  }

  isSelected(layer: Layer) {
    return this.selectedLayer == layer;
  }

  ngOnInit() {
    this.showAnimations = false;
    this.layers = layerData.sort((a,b) => b.tabOrder - a.tabOrder);
    this.selectedLayer=this.layers[0];
  }



}
