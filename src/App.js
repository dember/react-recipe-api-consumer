import React, {useEffect} from 'react';
import RecipeApp from "./RecipeApp";
import {Route, Switch} from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import {RecipeContext} from "./RecipeContext";
import axios from "axios";
import useRecipeState from "./hooks/useRecipeState";

function App() {
    const {recipes, editRecipe, removeRecipe, addRecipe, updateRecipes} = useRecipeState([]);

    const getRecipes = () => axios.get('/api/recipes/', {headers: {Accept: "application/json"}});

    useEffect(() => {
        getRecipes().then(response => {
            updateRecipes(response.data);
        }).catch( (error) => {
            alert("There was an error while fetching recipes!")
            console.error(error)
        });
    }, [])

  return (
          <RecipeContext.Provider
              value={{
                  recipes: recipes,
                  getRecipe: recipeId => {
                      return recipes.find(value => {
                          return value.id === recipeId
                      })
                  },
                  editRecipe: editRecipe,
                  removeRecipe: removeRecipe,
                  addRecipe: addRecipe,
                  updateRecipes: updateRecipes,
              }}
          >
              <Switch>
                  <Route exact path="/" component={RecipeApp} />
                  <Route exact path="/recipe/edit/:recipeId" render={(routeProps) => <EditRecipeForm {...routeProps} />}/>
              </Switch>
          </RecipeContext.Provider>
  );
}

export default App;
