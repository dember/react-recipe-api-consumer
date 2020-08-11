import React, {useContext, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import {RecipeContext} from "./RecipeContext";
import Button from "@material-ui/core/Button";
import useMultipleInputState from "./hooks/useMultipleInputState";
import { v4 as uuid } from 'uuid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

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

function EditRecipeForm({match}) {
    const classes = useStyles();

    const [recipeNameInput, handleChangeName] = useInputState('');
    const [recipeDescriptionInput, handleChangeDescription] = useInputState('');
    const [recipeIngredientsInput, handleChangeIngredients] = useMultipleInputState([]);
    const recipeId = parseInt(match.params.recipeId);
    const {recipes, editRecipe, getRecipe, updateRecipes} = useContext(RecipeContext)

    useEffect(() => {
        const currentRecipe = getRecipe(recipeId)
        if (currentRecipe) {
            handleChangeName({ target: { value: currentRecipe.name }})
            handleChangeDescription({ target: { value: currentRecipe.description }})
            handleChangeIngredients(undefined, { target: { value: currentRecipe.ingredients }})
        }
    }, [recipes, recipeId])

    const addIngredient = (event) => {
        event.preventDefault();
        const newIngredients = [...recipeIngredientsInput, { id: uuid(), name: "" }]
        handleChangeIngredients(undefined, { target: { value: newIngredients }})
    }

    const removeIngredient = (event, index) => {
        event.preventDefault();
        const newIngredients = recipeIngredientsInput.filter((ingredient, i) => i !== index)
        handleChangeIngredients(undefined, { target: { value: newIngredients }})
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
                <Typography color='inherit'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Recipe App</Link></Typography>
                <InputBase onChange={event => {
                    axios.get(`/api/recipes/?name=${event.target.value}`, {headers: {Accept: "application/json"}})
                        .then(response => {
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
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        editRecipe(recipeId, {
                            name: recipeNameInput,
                            description: recipeDescriptionInput,
                            ingredients: recipeIngredientsInput,
                        });
                    }}
                    style={{width:'50%'}}
                >
                    {console.log('recipeIngredientsInput vale esto:', recipeIngredientsInput)}
                    <TextField
                        label="Name"
                        margin='normal'
                        value={recipeNameInput}
                        onChange={handleChangeName}
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        value={recipeDescriptionInput}
                        onChange={handleChangeDescription}
                        variant="outlined"
                    />
                    {recipeIngredientsInput.map( (ingredient, index) => {
                        return (
                            <>
                                <TextField
                                    onChange={ event => { handleChangeIngredients(index, event) } }
                                    key={ingredient.id}
                                    value={ingredient.name}
                                    label="Ingredient"
                                    margin='normal'
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button variant="contained" onClick={event => removeIngredient(event, index)}>X</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </>
                        )
                    })}
                    <div style={{marginTop: 20}}>
                        <Button variant="contained" onClick={addIngredient}>Add ingredient</Button>
                    </div>

                    <div style={{marginTop: 20}}>

                        <Button variant="contained">
                            <Link to='/' style={{ textDecoration: 'none' }}>Back</Link>
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    </Paper>
    )
}

export default EditRecipeForm;