#!/usr/bin/env node

// src/index.ts
class Main {
  static init() {
    const args = process.argv.slice(2);
    switch (args[0]) {
      case "--greet":
        console.log("Hello, welcome to the TypeScript world!");
        break;
      case "farewell":
        console.log("Goodbye, see you next time!");
        break;
      default:
        console.log('Unknown command. Please use "greet" or "farewell".');
        break;
    }
  }
}
Main.init();
