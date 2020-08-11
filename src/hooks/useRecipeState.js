import {useState} from "react";
import {createRecipe, removeRecipe, updateRecipe} from "../api/apiClient";

export default initialRecipes => {
    const [recipes, setRecipes] = useState(initialRecipes)

    return {
        recipes,
        addRecipe: newRecipeName => {
            createRecipe({
                name: newRecipeName,
                description: '',
                ingredients: []
            }).then(response => setRecipes(
                [...recipes, {id: response.data.id, name: newRecipeName, description: ''}])
            )
        },
        removeRecipe: recipeId => {
            removeRecipe(recipeId).then(
                () => {
                    const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId)
                    setRecipes(updatedRecipes);
                }
            )
        },
        editRecipe: (recipeId, newRecipe) => {
            updateRecipe({
                id: recipeId,
                name: newRecipe.name,
                description: newRecipe.description,
                ingredients: newRecipe.ingredients
            }).then(() => {
                const updatedRecipes = recipes.map(recipe =>
                    recipe.id === recipeId ? {...recipe, name: newRecipe.name, description: newRecipe.description,
                        ingredients: newRecipe.ingredients} : recipe
                )
                setRecipes(updatedRecipes);
            })
        },
        updateRecipes: recipes => {
            setRecipes(recipes)
        }
    }
};
