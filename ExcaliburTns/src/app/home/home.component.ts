import { Component, OnInit } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import {
    GestureEventData,
    PanGestureEventData,
    PinchGestureEventData,
    RotationGestureEventData,
    SwipeGestureEventData,
    TouchGestureEventData} from "tns-core-modules/ui/gestures";
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public items: Array<SegmentedBarItem>;
    public selectedIndex = 0;

    constructor() {
        this.items = [];
        let segment1 = <SegmentedBarItem>new SegmentedBarItem();
        segment1.title = "New Game";
        let segment2 = <SegmentedBarItem>new SegmentedBarItem();
        segment2.title = "Set Lineup";
        let segment3 = <SegmentedBarItem>new SegmentedBarItem();
        segment3.title = "Settings"
        this.items.push(segment1);
        this.items.push(segment2);
        this.items.push(segment3);
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
}
