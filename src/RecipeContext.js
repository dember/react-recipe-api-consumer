import { createContext } from 'react'

export const RecipeContext = createContext({
    recipes: [],
    getRecipe: () => {},
    editRecipe: () => {},
    removeRecipe: () => {},
    addRecipe: () => {},
    updateRecipes: () => {},
})
