// import React from 'react'


// const Products = () => {
//     return (
//         <div className="content">
//             <div className="header_container"><h3 className="title">Products</h3></div>


            
//         </div>
//     )
// }

// export default Products

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Products = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      
    <div className="content">
    <div className="header_container"><h3 className="title">Products</h3></div>
    <div className="list">
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P1
                    </Avatar>
                    }
                    title="Product 1"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?cs=srgb&dl=pexels-ivan-oboleninov-2853909.jpg&fm=jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P2
                    </Avatar>
                    }
                    title="Product 2"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P3
                    </Avatar>
                    }
                    title="Product 3"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P4
                    </Avatar>
                    }
                    title="Product 4"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P5
                    </Avatar>
                    }
                    title="Product 5"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1589451359791-f9c33af92239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=618&q=80"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
            <Card style={{margin:"1% 0.2%"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P6
                    </Avatar>
                    }
                    title="Product 6"
                    subheader=" Added September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
                <Button style={{backgroundColor:"#4C84FF"}} variant="contained" color="primary">
                    Delete
                </Button>                
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Caracteristics</Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at gravida felis, eget scelerisque mauris. Praesent a risus massa. In eget pharetra est. Phasellus congue vitae sem et eleifend.
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </div>
    </div>
  );
}
export default Products

