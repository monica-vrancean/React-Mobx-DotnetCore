
import { observable, computed, action } from 'mobx';
import { RecipeItem } from './recipe';
import { Recipe } from '../recipes/recipe-item/recipe.component';

export class RecipeList{
    @observable recipes:RecipeItem[] = [];
    @computed get getRecipe(){
        fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json())
        .then(data => {
          console.log('data', data);
        });
        return this.recipes;
    }

    @action.bound
    public addRecipe(recipe: Recipe){
      this.recipes.push(new RecipeItem(recipe));
      console.log('recipe added', this.recipes)

    }

    @action.bound
    public deleteRecipe(recipeTitle: string){
        this.recipes = this.recipes.filter(recipe=>recipe.title!==recipeTitle);
    }
}

export default new RecipeList();