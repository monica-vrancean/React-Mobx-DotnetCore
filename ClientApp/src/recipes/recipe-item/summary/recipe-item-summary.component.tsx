import * as React from "react";
import './recipe-item-summary.component.css';
import { RecipeItemViewModel } from "../../../view-models/recipe-view-model";

interface Props{
    recipeItemViewModel: RecipeItemViewModel;
}

class RecipeItemSummaryComponent extends React.Component<Props>{
    public render(){
        return(
            <div className="recipe-summary"> 
                <div>
                    <img className="recipeImage" src={URL.createObjectURL(this.props.recipeItemViewModel.images[0])}/>
                </div>
                <div className="recipe-detail">
                    <span>{this.props.recipeItemViewModel.title}</span>
                </div>
            </div>
        );
    }
}

export default RecipeItemSummaryComponent;