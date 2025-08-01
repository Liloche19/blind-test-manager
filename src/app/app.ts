import { Component } from "@angular/core";
import { CounterComponent } from "./counter/counter";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  standalone: true,
  imports: [CounterComponent],
})
export class Counter {}
