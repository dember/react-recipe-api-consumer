import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Recipe from "./Recipe";

function RecipeList({recipes, removeRecipe}) {
    return (
        <Paper>
            <List>
                {recipes.map((recipe, i) => (
                    <React.Fragment key={i}>
                        <Recipe recipe={recipe} key={recipe.id} removeRecipe={removeRecipe}/>
                        {i < recipes.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default RecipeList;