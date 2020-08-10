import React, {useContext, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import {RecipeContext} from "./RecipeContext";

function EditRecipeForm({match}) {
    const [value, handleChange] = useInputState('');
    const recipeId = parseInt(match.params.recipeId);
    const {recipes, editRecipe, getRecipe} = useContext(RecipeContext)

    useEffect(() => {
        const currentRecipe = getRecipe(recipeId)
        if (currentRecipe) {
            handleChange({ target: { value: currentRecipe.name }})
        }
    }, [recipes, recipeId])

    return (
        <form
          onSubmit={event => {
            event.preventDefault();
            editRecipe(recipeId, value);
          }}
          style={{width:'50%'}}
        >
            <TextField
                label="Name"
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
            <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
            />

        </form>
    )
}

export default EditRecipeForm;