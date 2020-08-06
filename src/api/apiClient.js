import axios from "axios";

const recipeBaseUrl = '/api/recipes';

let createRecipe = properties => {
  return axios.post(`${recipeBaseUrl}/`, {
      name: properties.name,
      description: properties.description,
      ingredients: properties.ingredients,
      headers: {Accept: "application/json"}}
  )
};

let updateRecipe = properties => {
  return axios.patch(`${recipeBaseUrl}/${properties.id}/`, {
      name: properties.name,
      description: properties.description,
      ingredients: properties.ingredients,
      headers: {Accept: "application/json"}}
  )
};

let removeRecipe = uuid => {
  return axios.delete(`${recipeBaseUrl}/${uuid}`)
};

export {createRecipe, updateRecipe, removeRecipe};