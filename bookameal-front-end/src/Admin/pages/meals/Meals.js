import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@material-ui/core';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        // Fetch meal categories from TheMealDB API
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                setMeals(response.data.categories);  // Load categories only
            })
            .catch(error => {
                console.error('Error fetching meal data:', error);
            });
    }, []);

    const handleEditClick = (meal) => {
        setSelectedMeal(meal);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedMeal(null);
    };

    const handleSave = () => {
        // Save logic for meal (e.g., update API call)
        handleCloseDialog();
    };

    const handleAddMeal = () => {
        // Logic to add a new meal (e.g., POST request)
    };

    return (
        <div style={{ padding: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleAddMeal}>
                Add New Meal
            </Button>
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {meals.map(meal => (
                    <Grid item xs={12} sm={6} md={4} key={meal.idCategory}>
                        <Card>
                            <CardMedia
                                component="img"
                                style={{ height: '180px', width: '80%', objectFit: 'cover' }} // Consistent image sizing
                                image={meal.strCategoryThumb} // Category image
                                alt={meal.strCategory}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {meal.strCategory}  // Category name
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleEditClick(meal)}
                                    style={{ marginTop: '10px' }}
                                >
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog for editing meals */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Edit Meal</DialogTitle>
                <DialogContent>
                    {selectedMeal && (
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Category Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={selectedMeal.strCategory}
                            />
                            <TextField
                                margin="dense"
                                id="description"
                                label="Description"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={selectedMeal.strCategoryDescription}
                            />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Meals;
