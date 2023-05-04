import { Typography, Button, AppBar, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container,Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState, useEffect } from 'react'
import CategoryItem from './CategoryItem'
import { useLocation, useParams, useNavigate } from "react-router-dom";




export default function CategoryPage ({fullData}) {
    
    const location = useLocation();
    const propsData = location.state;

    const [ dropDown,setDropDown ] = useState("all")
    const handleChange = (e) => {
        setDropDown(e.target.value)
    }

    useEffect(()=>{
        console.log(dropDown)
    },[dropDown])
    
    const [categories, setCategories] = useState([{
        name: "Pasta",
        id: 1,
        image: "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
    },
    {
        name: "Indian Korma",
        id: 2,
        image:"https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.891xw:0.656xh;0.0433xw,0.321xh&resize=1200:*"
    },
    {
        name: "Hamburger",
        id: 3,
        image: "https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook"
    },
    {
        name: "Vegan Bowl",
        id: 4,
    image: "https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1"
}])
    
    return (
        <>
            <CssBaseline />
            <main>
                <div className="category_page">
                    <Container maxWidth="sm">
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Category Page
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, this is the category page and Im trying to make this sentence as long as possible so that we can see how it looks on the screen
                        </Typography>
                        <FormControl fullWidth sx={{ m: 3 }}>
                        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dropDown}
                            label="DropDown"
                            onChange={handleChange}
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"italian"}>Italian</MenuItem>
                            <MenuItem value={"indian"}>Indian</MenuItem>
                            <MenuItem value={"vegan"}>Vegan</MenuItem>
                        </Select>
                        </FormControl>
                        <div>
                            
                            <Grid container spacing={2} justify="center">
                                {categories.map(i=>{
                                return (<CategoryItem name={i.name} image={i.image} id={i.id} key={i.id} />)
                            })}
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}