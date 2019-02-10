import { Component, OnInit } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Repeater } from "tns-core-modules/ui/repeater";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import { EventData } from "tns-core-modules/data/observable";
import { forEach } from "@angular/router/src/utils/collection";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    //Initialize array for segmented bar
    public segmentedItems: Array<SegmentedBarItem>;
    // Initialize segmented bar to view the first tab on load
    public selectedIndex = 0;

    //initialize list array for Set Lineup tab
    public LineupListItems: Array<any> = ["red", "green", "blue"];
    //counter for set lineup load count
    public counter: number = 0;

    //Variables and array for Settings tab
    public prResult: number = 0;
    public SettingRowItems: ObservableArray<string> = new ObservableArray (["red", "green", "blue"]);
    

    constructor() {
        this.setSegmentedBar();
        this.setListItem();
    }

    // function for segmeneted bar 
    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
    }
    // setting values for segmented bar
    setSegmentedBar(){
        this.segmentedItems = [];
        let segment1 = <SegmentedBarItem>new SegmentedBarItem();
        segment1.title = "New Game";
        let segment2 = <SegmentedBarItem>new SegmentedBarItem();
        segment2.title = "Set Lineup";
        let segment3 = <SegmentedBarItem>new SegmentedBarItem();
        segment3.title = "Settings"
        this.segmentedItems.push(segment1);
        this.segmentedItems.push(segment2);
        this.segmentedItems.push(segment3);
    }

    // setting list for set lineup tab
    setListItem(){
       this.LineupListItems;
    }
  
    // function for adding item to setting list and adding item to set linup list
    addRowItem(args: EventData){
        const result = ++this.prResult;
        this.SettingRowItems.push(result.toString());
        this.LineupListItems.push(result);
    }
    //function for displaying list on settings tab
    setRepeater(args: EventData){
        const page: Page = <Page>args.object;
        const stackLayoutContainer: StackLayout = <StackLayout>page.getViewById("stackLayoutId");
        const secondColorsArray = this.SettingRowItems;

        const repeater = new Repeater();
        const stackLayout = new StackLayout();
        stackLayout.orientation = "vertical";
        repeater.itemsLayout = stackLayout;
        repeater.items = secondColorsArray;
        this.prResult = secondColorsArray.length;
        stackLayoutContainer.addChild(repeater);

    }

    // function to log set lineup list load amount
    onLoaded(event) {
      console.log("Label loaded " + (++this.counter) + " times");
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
}
