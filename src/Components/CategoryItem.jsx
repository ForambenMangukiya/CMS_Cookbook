import { Typography, Item, Button, CardContent, CardActions, CardMedia,  Grid, Container, Card } from '@mui/material'
import { Link} from "react-router-dom"
export default function CategoryItem ({name, image, id}) {
    return (
        
        <Grid item xs={6} md={4} xl={3} className='item' sx={{ mb: 1}}>
            <Link to={`/singlerecipe/${id}`}>
        <Card className='item' >
            <CardMedia component="img" src={image}/>
            <Typography variant="h6" align="center"> {name}</Typography>
        </Card>
        </Link>
        </Grid>
        /* Rating Component */
        
    )
}