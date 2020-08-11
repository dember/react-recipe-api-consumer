import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from "react-router-dom";

function Recipe({recipe, removeRecipe, editRecipe}) {
    return (
        <ListItem style={{height: '64px'}}>
                <ListItemText>
                    {recipe.name}
                </ListItemText>
                <ListItemSecondaryAction>
                    <Link to={`/recipe/edit/${recipe.id}`}  style={{ textDecoration: 'none', color: 'white' }}>
                        <IconButton aria-label='Edit'>
                            <EditIcon />
                        </IconButton>
                    </Link>

                    <IconButton aria-label='Delete' onClick={() => removeRecipe(recipe.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Recipe;
