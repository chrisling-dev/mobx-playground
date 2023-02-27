import { makeAutoObservable } from "mobx";

export class CounterStore {
  counter?: number = undefined;
  wrongCounter?: number;
  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.counter = this.counter === undefined ? 0 : this.counter + 1;
  }

  increaseWrongCounter() {
    this.wrongCounter =
      this.wrongCounter === undefined ? 0 : this.wrongCounter + 1;
  }
}
