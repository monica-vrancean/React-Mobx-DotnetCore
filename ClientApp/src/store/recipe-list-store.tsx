
import { observable, computed, action } from 'mobx';
import { RecipeItem } from '../view-models/recipe';
import { Recipe } from '../components/recipes/recipe-item/recipe.component';

export class RecipeListStore{
    @observable recipes:RecipeItem[] = [];
    @computed get getRecipes(){
        // fetch('api/SampleData/WeatherForecasts')
        // .then(response => response.json())
        // .then(data => {
        //   console.log('data', data);
        // });
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

export default new RecipeListStore();