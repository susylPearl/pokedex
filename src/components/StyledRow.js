import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const StyledRow = (props) => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten("#ff6c5c", 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: "#ff6c5c",
    },
  })(LinearProgress);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 'inherit'
    },
    margin: {
      margin: theme.spacing(1),
    },
    parag: {
      marginTop: "auto",
    },
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={2}>
        <p className={classes.parag}>{props.name}</p>
      </Grid>
      <Grid item xs={8}>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={props.value}/>
      </Grid>
      <Grid item xs={2}>
        <p className={classes.parag}>{props.value}%</p>
      </Grid>
    </Grid>
  );
};

export default StyledRow;
