import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.html",
  styleUrls: ["./counter.css"],
})
export class Counter {
  @Input() team: string = "";
  public clickable: boolean = true;
  score: number = 0;
  @Output() notifyChange = new EventEmitter<void>();

  increment() {
    if (this.clickable) {
      this.score++;
      this.notifyChange.emit();
    } else {
      console.log(`Can't increment ${this.team}'s score!`);
    }
  }
}
