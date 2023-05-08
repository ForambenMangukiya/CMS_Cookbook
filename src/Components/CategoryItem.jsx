import { Typography, Item, Button, CardContent, CardActions, CardMedia,  Grid, Container, Card } from '@mui/material'
import { Link, useLocation} from "react-router-dom"
export default function CategoryItem ({name, image, id}) {

    const location = useLocation();
    const propsData = location.state;

    return (
        <Link to={`/singlerecipe/${id}`} state={{ propsData }}>
        <Grid item xs={6}  className='item' sx={{ mx: 'auto' }}>
        <Card className='item' >
            <CardMedia component="img" src={image}/>
            <Typography variant="h6" align="center"> {name}</Typography>
        </Card>
        </Grid>
        {/* Rating Component */}
        </Link>
    )
}