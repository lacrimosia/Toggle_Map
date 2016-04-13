System.register(['angular2/core', './layer-data', './space-to-break-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, layer_data_1, space_to_break_pipe_1;
    var KEY_SPACE, KEY_ENTER, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (layer_data_1_1) {
                layer_data_1 = layer_data_1_1;
            },
            function (space_to_break_pipe_1_1) {
                space_to_break_pipe_1 = space_to_break_pipe_1_1;
            }],
        execute: function() {
            KEY_SPACE = 32;
            KEY_ENTER = 13;
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Culture Group Viewer';
                    this.width = 700;
                    this.height = 571;
                    this.toggle = false;
                }
                AppComponent.prototype.pressKey = function (keyCode, layer) {
                    if (keyCode === KEY_SPACE || keyCode === KEY_ENTER) {
                        this.selectLayer(layer);
                    }
                };
                AppComponent.prototype.isFirst = function (layer) {
                    return layer == this.layers[0];
                };
                AppComponent.prototype.isLast = function (layer) {
                    return layer == this.layers[this.layers.length - 1];
                };
                AppComponent.prototype.selectLayer = function (layer) {
                    this.showAnimations = true;
                    this.selectedLayer = layer;
                };
                AppComponent.prototype.isSelected = function (layer) {
                    return this.selectedLayer == layer;
                };
                AppComponent.prototype.change = function () {
                    this.toggle = !this.toggle;
                    if (this.toggle) {
                        this.selectedLayer = this.layers[1];
                    }
                    else {
                        this.selectedLayer = this.layers[0];
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.showAnimations = false;
                    this.layers = layer_data_1.layerData.sort(function (a, b) { return a.tabOrder - b.tabOrder; });
                    this.selectedLayer = this.layers[0];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app-component.html',
                        styleUrls: ["./styles/app.component.css"],
                        providers: [AppComponent],
                        pipes: [space_to_break_pipe_1.SpaceToBreakPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map