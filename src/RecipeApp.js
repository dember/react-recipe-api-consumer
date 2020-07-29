import React, {useState} from "react"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RecipeList from "./RecipeList";

function RecipeApp() {
    const initialRecipes = [
        {id: 1, name: 'Recipe name 1', description: 'Description 1'},
        {id: 2, name: 'Recipe name 2', description: 'Description 2'},
        {id: 3, name: 'Recipe name 3', description: 'Description 3'},
    ]
    const [recipes, setRecipes] = useState(initialRecipes)
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
            <RecipeList recipes={recipes}/>
        </Paper>
    )
}

export default RecipeApp;