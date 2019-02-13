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

  selectedPlayer: Player = new Player();

    //buttonClicked: boolean = false;

    playerToggle(args: EventData){//args is the stacklayout that is tapped
        let tappedStack = <View>args.object; 
        let tappedPlayer = tappedStack.bindingContext;    

        let parent = tappedStack.parent;
        let highlight = parent.getViewById("button-clicked");

        if(highlight){
            if (highlight != tappedStack) {
                highlight.id = "playericon";
            }
        }
        

        if (tappedStack.id == "playericon") {
            tappedStack.id = "button-clicked";
            console.log(tappedPlayer.firstname + " was selected");
            this.selectedPlayer = tappedPlayer;
        } else if (tappedStack.id == "button-clicked") {
            tappedStack.id = "playericon";
            console.log(tappedPlayer.firstname + " was deselected");
            this.selectedPlayer = new Player();
        }
        
    }


    goalCount = 0;

    goalTap(){
        if (this.selectedPlayer.id != 0) {
            this.goalCount++;
            console.log(this.selectedPlayer.firstname + " scored a Goal!!!");
        }
    }
}



// export class GestureComponent { 

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


