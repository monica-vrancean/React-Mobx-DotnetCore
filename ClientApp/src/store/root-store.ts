import { TodoListStore } from "./todo-list-store";
import { RecipeListStore } from "./recipe-list-store";
import { ViewState } from "./view-state";

export class RootStore{
    todoList: TodoListStore;
    recipeList: RecipeListStore;
    viewState: ViewState;

    constructor(){
        this.todoList = new TodoListStore();
        this.recipeList = new RecipeListStore();
        this.viewState = new ViewState();
    }
}

export default new RootStore();