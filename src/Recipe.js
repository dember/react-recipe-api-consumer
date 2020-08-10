import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Recipe({recipe, removeRecipe, editRecipe}) {
    return (
        <ListItem style={{height: '64px'}}>
                <ListItemText>
                    {recipe.name}
                </ListItemText>
                <ListItemSecondaryAction>
                    <a href={`/recipe/edit/${recipe.id}`}>
                        <IconButton aria-label='Edit'>
                            <EditIcon />
                        </IconButton>
                    </a>
                    <IconButton aria-label='Delete' onClick={() => removeRecipe(recipe.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Recipe;
