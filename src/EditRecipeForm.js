import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditRecipeForm({editRecipe, recipe, toggleEditing}) {
    const [value, handleChange, reset] = useInputState(recipe.name);
    return (
        <form
          onSubmit={event => {
            event.preventDefault();
            editRecipe(recipe.id, value);
            reset();
            toggleEditing()
          }}
          style={{width:'50%'}}
        >
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    )
}

export default EditRecipeForm;