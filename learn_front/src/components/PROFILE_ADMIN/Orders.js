

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Orders = ({order}) => {
  const classes = useStyles();

  return (
    
        <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><span className="card_title">{order.description}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Your Command contains the following products : {order.product}
           Your Command Date is : {order.date}
           your Payment will be established : {order.mod_liv}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

export default Orders
