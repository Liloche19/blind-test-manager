import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Button } from "../app";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.html",
  styleUrls: ["./counter.scss"],
  imports: [CommonModule],
})
export class Counter {
  @Input() team: string = "";
  @Input() buttons: Button[] = [];
  score: number = 0;
  clickable: boolean[] = new Array(this.buttons.length).fill(true);
  @Output() notify = new EventEmitter<number>();

  ngOnInit() {
    this.buttons.forEach((button) => {
      this.clickable[button.id] = true;
    });
  }

  increment(button: Button) {
    if (this.clickable[button.id]) {
      this.score += button.value;
      this.notify.emit(button.id);
    } else {
      console.log(`Can't increment ${this.team}'s score!`);
    }
  }
}
