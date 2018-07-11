import * as React from "react";
import './recipe-list.component.css';
import { inject, observer } from "mobx-react";
import { RecipeListViewModel } from "../../view-models/recipe-list-view-mdel";
import RecipeItemSummaryComponent from "../recipe-item/summary/recipe-item-summary.component";

interface Props{
    recipeListViewModel:RecipeListViewModel;
  }

@inject('recipeListViewModel')
@observer
class RecipeListComponent extends React.Component{
    recipeList: RecipeListViewModel;

   constructor(props:Props){
      super(props);
      this.recipeList = props.recipeListViewModel;
  }

    public render(){       
        return (
      <div className="recipe-list">
       <ul>
          {this.recipeList.getRecipe.map((recipe, index)=>{
            return <RecipeItemSummaryComponent key={index} recipeItemViewModel={recipe}/>
          })}
        </ul>
      </div>
    );
}
}

export default RecipeListComponent;