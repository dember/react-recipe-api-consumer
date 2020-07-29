import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function RecipeList(props) {
    return (
        <Paper>
            <List>
                {props.recipes.map((recipe, i) => (
                    <React.Fragment key={i}>
                        <ListItem>
                            <ListItemText>{recipe.name}</ListItemText>
                        </ListItem>
                        {i < props.recipes.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default RecipeList;