import { Typography, CardMedia,  Grid, Card, Rating } from '@mui/material'
import { Link, useLocation} from "react-router-dom"
export default function CategoryItem ({name, image, id, difficulty}) {
    const imagePath = process.env.PUBLIC_URL + `/img/${id}.jpg`
    console.log(imagePath)

    const location = useLocation();
    const propsData = location.state;

    return (
        <Grid item xs={6} md={4} xl={3} className='item' sx={{ mb: 1}}>
            <Link to={`/singlerecipe/${id}`} state={{ propsData }}>

        <Card className='item' >
            <CardMedia component="img" src={imagePath}/>
            <Typography variant="h6" align="center"> {name}</Typography>
            <Rating
                name="simple-controlled"
                max={3}
                defaultValue={difficulty ? difficulty : 2}
                
            />
        </Card>
        </Link>
        </Grid>
        /* Rating Component */
        
    )
}