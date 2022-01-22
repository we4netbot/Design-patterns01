import { Buld } from "./factory";
import { exchange } from "./observer";
import { proxy } from "./proxy";
import { callSchool } from "./Singleton";

console.log("Singleton...\n")
callSchool();
console.log("\nFactory and Singleton...\n")
Buld();
console.log("\nObserver and Singleton...\n")
exchange();
console.log("\nproxy and Singleton...\n")
proxy();