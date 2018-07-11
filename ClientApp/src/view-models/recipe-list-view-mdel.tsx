
import { observable, computed, action } from 'mobx';
import { RecipeItemViewModel } from 'src/view-models/recipe-view-model';
import { Recipe } from '../recipes/recipe-item/recipe.component';

export class RecipeListViewModel{
    @observable recipes:RecipeItemViewModel[] = [];
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
      this.recipes.push(new RecipeItemViewModel(recipe));
      console.log('recipe added', this.recipes)

    }

    @action.bound
    public deleteRecipe(recipeTitle: string){
        this.recipes = this.recipes.filter(recipe=>recipe.title!==recipeTitle);
    }
}

export default new RecipeListViewModel();