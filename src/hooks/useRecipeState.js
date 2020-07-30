import {v4 as uuid} from "uuid";
import {useState} from "react";

export default initialRecipes => {
    const [recipes, setRecipes] = useState(initialRecipes)
    return {
        recipes,
        addRecipe: newRecipeName => {
            setRecipes([...recipes, {id: uuid(), name: newRecipeName, description: 'Description 4'}])
        },
        removeRecipe: recipeId => {
            const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId)
            setRecipes(updatedRecipes);
        },
        editRecipe: (recipeId, newRecipeName) => {
            const updatedRecipes = recipes.map(recipe =>
                recipe.id === recipeId ? {...recipe, name: newRecipeName} : recipe
            )
            setRecipes(updatedRecipes);
        }
    }
};
