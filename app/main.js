import { ItemsController } from "./Controllers/ItemsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  itemsController = new ItemsController
}

window["app"] = new App();
