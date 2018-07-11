import { observable, action } from "mobx";
import { Recipe } from "../recipes/recipe-item/recipe.component";

export class RecipeItemViewModel{
    @observable public title: string;
    @observable public isEditable:boolean;
    @observable public description: string;
    @observable public ingredients: string;
    @observable public difficulty: number;
    @observable public duration: string;
    @observable public images:File[];

    constructor(recipe: Recipe){
        this.title = recipe.title;
        this.description = recipe.description;
        this.difficulty = recipe.difficulty;
        this.duration = recipe.duration;
        this.isEditable = false;
        this.images = [];
        if(recipe.image){
            this.images.push(recipe.image);
        }
    }


    public editRecipe(){
        this.isEditable = true;
     }

    public updateRecipe(newTodoValue: string){       
            this.title = newTodoValue;
            this.isEditable = false;        
    }

    @action
    public resetEditableTodo(){        
            this.isEditable = false;        
    }
}
