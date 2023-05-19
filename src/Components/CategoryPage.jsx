import { Typography, Button, AppBar, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container,Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState, useEffect } from 'react'
import CategoryItem from './CategoryItem'
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from './Navbar';




export default function CategoryPage () {
    const location = useLocation();
    const propsData = location.state;
    
    const [ dropDown,setDropDown ] = useState("All")
    const [ data, setData ] = useState(propsData.recipes)
    console.log(data)
    const handleChange = (e) => {
        setDropDown(e.target.value)
    }

    useEffect(()=>{
        if (dropDown ==="All"){
            setData(propsData.recipes)
        }
        else {
            const filteredData = propsData.recipes.filter((i)=>{
                return i.fields.category === dropDown;
            })
            setData(filteredData)
        }
       
    },[dropDown])
    
    return (
        <div >
            <Navbar />
            <CssBaseline />
            <main>
                <div className="category_page">
                    <Container maxWidth={'lg'} disableGutters >
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Category Page
                        </Typography>
                        
                        <FormControl fullWidth sx={{ m: 3 }} disableGutters>
                        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dropDown}
                            label="DropDown"
                            onChange={handleChange}
                            sx={{ mr:5 }}
                        >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Italian"}>Italian</MenuItem>
                            <MenuItem value={"Indian"}>Indian</MenuItem>
                            <MenuItem value={"Vegan"}>Vegan</MenuItem>
                            <MenuItem value={"American"}>American</MenuItem>
                        </Select>
                        </FormControl>
                        <div>
               {}
                            <Grid container spacing={2} sx={{/* ml:1,mr:1 */
     }} >
                                {data.map(i=>{
                                return (<CategoryItem state={{ propsData }} name={i.recipe_name} id={i.id} key={i.id} difficulty={i.difficulty} />)
                            })}
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </div>
    )
}