import { Component, ViewChildren, QueryList } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Counter } from "./counter/counter";

export class Button {
  value: number;
  name: string;
  id: number = 0;

  constructor(name: string, value: number, id: number) {
    this.name = name;
    this.value = value;
    this.id = id;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrls: ["./app.scss"],
  standalone: true,
  imports: [CommonModule, Counter],
})
export class App {
  round = 1;
  teamNames = ["TeamA", "TeamB", "TeamC"];
  buttons = [
    new Button("Artist", 1, 0),
    new Button("Title", 1, 1),
    new Button("Release date", 0.5, 2),
  ];
  @ViewChildren(Counter) teams!: QueryList<Counter>;

  blockCounters(id: number) {
    this.teams.forEach((counter) => {
      counter.clickable[id] = false;
    });
  }

  newRound() {
    this.round++;
    this.teams.forEach((counter) => {
      for (let i = 0; i < counter.clickable.length; i++) {
        counter.clickable[i] = true;
      }
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
