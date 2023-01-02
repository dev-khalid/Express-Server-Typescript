import express, { 
  Application, 
} from "express"; 
import { Server } from "node:http";
const app: Application = express();
interface Todo { 
  x: string
}
const y: Todo = {x: '1'}
const json = '{"x":"5","y":"str"}'
const data: {x:number} = JSON.parse(json); //object literal doesn't know who is y so it is refusing it. 
app.listen(5000, () => {
  console.log("Server running on port : 5000");
});
