import React, {useEffect} from "react"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import Grid from "@material-ui/core/Grid";
import useRecipeState from "./hooks/useRecipeState";
import axios from "axios";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));

function RecipeApp() {
    const classes = useStyles();

    const {recipes, editRecipe, removeRecipe, addRecipe, updateRecipes} = useRecipeState([]);

    const fetchRecipes = () => axios.get('/api/recipes/', {headers: {Accept: "application/json"}})
        .then(response => {
            console.log(response.data);
            updateRecipes(response.data);
        });

    useEffect(() => {
        fetchRecipes()
    }, [])

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
                    <InputBase onChange={event => {
                        axios.get(`/api/recipes/?name=${event.target.value}`, {headers: {Accept: "application/json"}})
                            .then(response => {
                                console.log(response.data);
                                updateRecipes(response.data);
                            });
                    }}
                        placeholder="Search recipe…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search recipe' }}
                    />
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <RecipeForm addRecipe={addRecipe}/>
                    <RecipeList recipes={recipes} removeRecipe={removeRecipe} editRecipe={editRecipe} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default RecipeApp;