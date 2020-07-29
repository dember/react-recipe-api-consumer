import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggleState";
import EditRecipeForm from "./EditRecipeForm";

function Recipe({recipe, removeRecipe, editRecipe}) {
    const [isEditing, toggleEditing] = useToggle(false);
    return (
        <ListItem style={{height:'64px'}}>
            {isEditing ? (
                <EditRecipeForm editRecipe={editRecipe} recipe={recipe} toggleEditing={toggleEditing}/>
            ) : (
                <>
                    <ListItemText>
                        {recipe.name}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Edit' onClick={toggleEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label='Delete' onClick={() => removeRecipe(recipe.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )
            }
        </ListItem>
    );
}

export default Recipe;
