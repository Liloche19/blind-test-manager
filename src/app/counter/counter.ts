import { Component, Input } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.html",
  styleUrls: ["./counter.css"],
})
export class CounterComponent {
  @Input() team: string = "";
  score = 0;

  increment() {
    console.log("init");
    this.score++;
  }
}
