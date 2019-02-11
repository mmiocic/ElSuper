import { Component, OnInit } from '@angular/core';
// import {
//     GestureEventData,
//     PanGestureEventData,
//     PinchGestureEventData,
//     RotationGestureEventData,
//     SwipeGestureEventData,
//     TouchGestureEventData} from "tns-core-modules/ui/gestures";

import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";
import { Player, PlayerService } from "../services/player.service"


@Component({
  selector: 'ns-pan-comp',
  templateUrl: './pan-comp.component.html',
  styleUrls: ['./pan-comp.component.css'],
  styles: [
        
],
  moduleId: module.id,
})


export class PanCompComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  allPlayers: Player[] = this.playerService.getPlayers();
  //playersInLineup: Player[] --> will need to figure this out later
  actions: string[] =[
      "Shot",
      "Foul",
      "Ejection",
      "Pass",
      "Goal"
  ];

    buttonClicked: boolean = false;

    playerToggle(args: EventData){//args is the label that is tapped
        let label = <View>args.object; 
        let stackLayout = label.parent;
        if (stackLayout.className == "playericon") {
            console.log("testing");
            stackLayout.className = "button-clicked";
        } else if (stackLayout.className == "button-clicked") {
            console.log("this is another test");
            stackLayout.className = "playericon";
        }
        // let buttonid = button.id;
        // console.log(button);
        // console.log(buttonid);
        // let gridLO = button.parent;
        this.buttonClicked = !this.buttonClicked;
        // if (this.buttonClicked) {
        //     button.className = "button-clicked";
        // } else if (this.buttonClicked == false) {
        //     button.className = "";
        //  }
    }


    goalCount = 0;

    goalTap(args: EventData){
        let lbl = <View>args.object;
        let gridLayout = lbl.parent;
        if (this.buttonClicked) {
            this.goalCount++;
            console.log("Goal!");
            this.playerToggle(args);
        }
    }
}



// export class GestureComponent { //the name of this component is pan-comp...
//                                 //..so everything inside these braces wont work
//                                 //but still useful to have for references

//   // >> ng-tap-gesture
//   onTap(args: GestureEventData) {
//       console.log("Tap!");
//       //let button = <Button>args.object;
//   }
//   // << ng-tap-gesture

//   // >> ng-double-tap-gesture
//   onDoubleTap(args: GestureEventData) {
//       console.log("DoubleTap!");

//   }
//   // << ng-double-tap-gesture

//   // >> ng-long-press-gesture
//   onLongPress(args: GestureEventData) {
//       console.log("LongPress!");
//   }
//   // << ng-long-press-gesture

//   // >> ng-swipe-gesture
//   onSwipe(args: SwipeGestureEventData) {
//       console.log("Swipe Direction: " + args.direction);
//   }
//   // << ng-swipe-gesture

//   // >> ng-pan-gesture
//   onPan(args: PanGestureEventData) {
//       console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
//   }
//   // << ng-pan-gesture

//   // >> ng-pinch-gesture
//   onPinch(args: PinchGestureEventData) {
//       console.log("Pinch scale: " + args.scale + " state: " + args.state);
//   }
//   // << ng-pinch-gesture

//   // >> ng-rotate-gesture
//   onRotate(args: RotationGestureEventData) {
//       console.log("Rotate angle: " + args.rotation + " state: " + args.state);
//   }
//   // << ng-rotate-gesture

//   // >> ng-touch-gesture
//   onTouch(args: TouchGestureEventData) {
//       console.log(
//           "Touch point: [" + args.getX() + ", " + args.getY() +
//           "] activePointers: " + args.getActivePointers().length);
//   }
//   // << ng-touch-gesture
// }


