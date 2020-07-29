import React, {useState} from "react"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import Grid from "@material-ui/core/Grid";

function RecipeApp() {
    const initialRecipes = [
        {id: 1, name: 'Recipe name 1', description: 'Description 1'},
        {id: 2, name: 'Recipe name 2', description: 'Description 2'},
        {id: 3, name: 'Recipe name 3', description: 'Description 3'},
    ]
    const [recipes, setRecipes] = useState(initialRecipes)
    const AddRecipe = newRecipeName => {
        setRecipes([...recipes, {id: 4, name: newRecipeName, description: 'Description 4'}])
    }
    return (
        <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}>
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Recipe App</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <RecipeForm addRecipe={AddRecipe}/>
                    <RecipeList recipes={recipes}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default RecipeApp;