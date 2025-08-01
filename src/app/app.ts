import { Component, ViewChildren, QueryList } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Counter } from "./counter/counter";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  standalone: true,
  imports: [CommonModule, Counter],
})
export class App {
  round = 0;
  teamNames = ["TeamA", "TeamB"];
  @ViewChildren(Counter) teams!: QueryList<Counter>;

  blockCounters() {
    this.teams.forEach((counter) => {
      counter.clickable = false;
    });
  }

  newRound() {
    this.round++;
    this.teams.forEach((counter) => {
      counter.clickable = true;
    });
  }
}
