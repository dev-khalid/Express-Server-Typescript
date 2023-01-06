import express, { Application } from "express";
import { Server } from "node:http";
const app: Application = express();
interface Todo {
  x: string;
}
const y: Todo = { x: "1" };
const json = '{"x":"5","y":"str"}';
const data: { x: number } = JSON.parse(json); //object literal doesn't know who is y so it is refusing it.
const profile = {
  age: 20,
  name: "akash",
};
const { age }: { age: number; name: string } = profile;

interface Vehicle {
  name: string;
  year: string;
  summary(): string;
}
const oldCivic = {
  name: "toyota",
  year: "10-12-2020",
  summary(): string {
    return `${this.name} & ${this.year}`;
  },
};
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
class Vehicle {
  protected honk(): void {
    console.log("Vroom!");
  }
}
class Car extends Vehicle {
  private someMethod(): void {
    this.honk();
  }
  private color: string = "red";
  private data: any;
}
const car = new Car();
app.listen(5000, () => {
  console.log("Server running on port : 5000");
});
