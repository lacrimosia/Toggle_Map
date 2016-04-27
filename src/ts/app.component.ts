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
  box;
  constructor(){

  }

layerButtonKeypress(keyCode, layer) {
  if (this.isActionKeyPress(keyCode)) this.selectLayer(layer);
}

toggleButtonKeypress(keyCode) {
  if (this.isActionKeyPress(keyCode)) this.toggleLayer();
}

isActionKeyPress(keyCode) {
return keyCode === KEY_SPACE || keyCode === KEY_ENTER;
}

  isFirst(layer: Layer) {
    return layer == this.layers[0];
  }

  isLast(layer: Layer) {
    return layer == this.layers[this.layers.length - 1];
  }

  selectLayer(layer: Layer) {
    this.showAnimations = true;
    this.selectedLayer = layer;
    if(this.selectedLayer == this.layers[0]){
      this.box = false;
    }else{
      this.box = true;
    }
  }

 toggleLayer(){
    if(this.box == false) {
      this.selectLayer(this.layers[1]);
    }else{
      this.selectLayer(this.layers[0]);
    }
  }

  isSelected(layer: Layer) {
    return this.selectedLayer == layer;
  }

  ngOnInit() {
    this.showAnimations = false;
    this.layers = layerData.sort((a,b) => a.tabOrder - b.tabOrder);
    this.selectedLayer = this.layers[0];
    this.box = false;
  }



}
