import { Component, ViewChildren, QueryList } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Counter } from "./counter/counter";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrls: ["./app.scss"],
  standalone: true,
  imports: [CommonModule, Counter],
})
export class App {
  round = 0;
  teamNames = [
    "TeamA",
    "TeamB",
    "TeamC",
    "teamD",
    "TeamE",
    "TeamF",
    "TeamG",
    "TeamH",
    "TeamI",
    "TeamJ",
    "TeamK",
    "TeamL",
  ];
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

  getTotalPoints(): number {
    let sum = 0;
    if (!this.teams) {
      return sum;
    }
    this.teams.forEach((counter) => {
      sum += counter.score || 0;
    });
    return sum;
  }
}
