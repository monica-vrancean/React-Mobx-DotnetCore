import * as React from "react";
import './recipe-list.component.css';
import { inject, observer } from "mobx-react";
import RecipeItemSummaryComponent from "../recipe-item/summary/recipe-item-summary.component";
import { RecipeList } from "../../context/recipe-list";

interface Props{
    recipeListViewModel:RecipeList;
  }

@inject('recipeListViewModel')
@observer
class RecipeListComponent extends React.Component{
    recipeList: RecipeList;

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