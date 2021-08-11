
import {Button} from 'react-bootstrap';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {deleteOrder} from '../../JS/action/actionOrder'
import { useDispatch } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Orders = ({ order }) => {
  const classes = useStyles();
  const dispatch= useDispatch()

  return (
    
        <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{ fontSize:'23px'}}><span className="card_title"  >{order.description}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontWeight:'bold'}} >
            <ul>
          <li><p class="lead">Your Command contains the following products : {order.product}</p> </li>
          <li><p class="lead">Your Command Date is : {order.date}</p></li>
          <li><p class="lead">your Payment will be established : {order.mod_liv}</p></li>
          </ul>
          </Typography>
        </AccordionDetails>
        <Button style={{backgroundColor:"rgb(94,66,166)", margin:"3% 3%"}} variant="light" size="sm" onClick={() => dispatch(deleteOrder(order._id))}>
              <span style={{color:"white"}}>Delete</span>
          </Button> 
      </Accordion>
      
    </div>
  );
}

export default Orders
