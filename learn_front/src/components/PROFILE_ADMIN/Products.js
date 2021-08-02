import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Products2 = ({product}) => {
  const classes = useStyles();

  return (
    <div className="content">
    <div className="header_container"><h3 className="title">Products</h3></div>
    <div className="list">
    <Card style={{margin:"1% 0.2%"}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2860507/pexels-photo-2860507.jpeg?cs=srgb&dl=pexels-nathasha-daher-2860507.jpg&fm=jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span className="card_title">{product.description}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         Product Quantity {product.qte}</Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         Product category {product.category}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         Product Price {product.price}
         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button style={{backgroundColor:"rgb(94,66,166)", margin:"3% 3%"}} variant="light" size="sm">
              <span style={{color:"white"}}>Delete</span>
          </Button> 
      </CardActions>
    </Card>
    
    </div>
    </div>
  );
}

export default Products2