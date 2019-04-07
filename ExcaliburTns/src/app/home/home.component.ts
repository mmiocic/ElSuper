import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter  } from "@angular/core";
import { AnimationCurve } from "ui/enums";
import { screen } from "platform";
import { setTimeout } from "timer";



@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    @ViewChild('tabHighlight') tabHighlight: ElementRef;
	selectedTab: number = 0;

	@ViewChild('image1') image1: ElementRef;
	@ViewChild('image2') image2: ElementRef;
	@ViewChild('image3') image3: ElementRef;
	@ViewChild('image4') image4: ElementRef;

	@Output() tabSelected = new EventEmitter<number>();
    
    
    currentComponent:string = "";

     constructor() {
    // this.setSegmentedBar();  //part of segmentedbar stuff
    // this.setListItem();
   }

    
    ngOnInit(): void {
        // Init your component properties here.
    }

    ngAfterViewInit() {
		setTimeout(() => { this.animateCurrentImage(this.image1); }, 100);
	}

    navigationButtonClasses(component): string {
        if (component === this.currentComponent) {
            return "fa nav-btn purple";
        } else {
            return "fa nav-btn";
        }
    }

    onTap() {
        alert("clicked an item");
    }
    

    selectTab(index: number) {
		console.log("yoooo");
		let previousTab = this.selectedTab;
		if (index != this.selectedTab) {
			this.selectedTab = index;
			this.tabHighlight.nativeElement.animate({
				translate: { x: index * screen.mainScreen.widthDIPs / 4, y: 0 },
				curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
				duration: 300
			})
			this.animateCurrentImage(this.getImage(index));
			this.animatePreviousImage(this.getImage(previousTab));
			this.tabSelected.emit(this.selectedTab);

			if (index == 1){
				this.currentComponent = "Games";
				console.log("switched to: " + this.currentComponent);
			} else if (index == 2){
				this.currentComponent = "Teams";
				console.log("swithced to: " + this.currentComponent);
			}

		}
    }
    
    getImage(index) {
		let currentImage;
		switch (index) {
			case 0:
				currentImage = this.image1;
				break;
			case 1:
				currentImage = this.image2;
				break;
			case 2:
				currentImage = this.image3;
				break;
			case 3:
				currentImage = this.image4;
				break;
			default:
				break; 
		}
		return currentImage;
	}

	animateCurrentImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1.2, y: 1.2 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 300
		});
	}

	animatePreviousImage(arg: any) {
		arg.nativeElement.animate({
			scale: { x: 1, y: 1 },
			curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			duration: 300
		})
	}



}


//julians segmented bar stuff commented out


// import { forEach } from "@angular/router/src/utils/collection";

// import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
// import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";

// import { Repeater } from "tns-core-modules/ui/repeater";
// import { Page } from "tns-core-modules/ui/page";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

// import { EventData } from "tns-core-modules/data/observable";



//     //Initialize array for segmented bar
//   public segmentedItems: Array<SegmentedBarItem>;
//   // Initialize segmented bar to view the first tab on load
//   public selectedIndex = 0;

//   //initialize list array for Set Lineup tab
//   public LineupListItems: Array<any> = ["red", "green", "blue"];
//   //counter for set lineup load count
//   public counter: number = 0;

//   //Variables and array for Settings tab
//   public prResult: number = 0;
//   public SettingRowItems: ObservableArray<string> = new ObservableArray (["red", "green", "blue"]);

 


//    // function for segmeneted bar 
//    public onSelectedIndexChange(args) {
//     let segmetedBar = <SegmentedBar>args.object;
//     this.selectedIndex = segmetedBar.selectedIndex;
// }
// setting values for segmented bar
// setSegmentedBar(){
//     this.segmentedItems = [];
//     let segment1 = <SegmentedBarItem>new SegmentedBarItem();
//     segment1.title = "New Game";
//     let segment2 = <SegmentedBarItem>new SegmentedBarItem();
//     segment2.title = "Set Lineup";
//     let segment3 = <SegmentedBarItem>new SegmentedBarItem();
//     segment3.title = "Settings"
//     this.segmentedItems.push(segment1);
//     this.segmentedItems.push(segment2);
//     this.segmentedItems.push(segment3);
// }

// setting list for set lineup tab
// setListItem(){
//    this.LineupListItems;
// }

// // function for adding item to setting list and adding item to set linup list
// addRowItem(args: EventData){
//     const result = ++this.prResult;
//     this.SettingRowItems.push(result.toString());
//     this.LineupListItems.push(result);
// }
// //function for displaying list on settings tab
// setRepeater(args: EventData){
//     const page: Page = <Page>args.object;
//     const stackLayoutContainer: StackLayout = <StackLayout>page.getViewById("stackLayoutId");
//     const secondColorsArray = this.SettingRowItems;

//     const repeater = new Repeater();
//     const stackLayout = new StackLayout();
//     stackLayout.orientation = "vertical";
//     repeater.itemsLayout = stackLayout;
//     repeater.items = secondColorsArray;
//     this.prResult = secondColorsArray.length;
//     stackLayoutContainer.addChild(repeater);

// }

// // function to log set lineup list load amount
// onLoaded(event) {
//   console.log("Label loaded " + (++this.counter) + " times");
// }





