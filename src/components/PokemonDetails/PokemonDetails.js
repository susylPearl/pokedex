import React, { useState, useEffect } from "react";
import _ from "underscore";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchPokemonDetails } from '../../actions/pokemonDetailsAction';
import PokemonProfile from './PokemonProfile';
import PokemonStats from './PokemonStats';

const PokemonDetails = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: "aliceBlue",
    },
    header: {
      background: "darkcyan",
      color: "white",
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    padding: {
      padding: 20,
    },
    progress: {
      position: 'absolute',
      height: 100,
      width: 100,
      top: '50%',
      left: '50%',
      marginLeft: -50,
      marginTop: -50,
      backgroundSize: '100%',
    }
  }));

  const pokemonId = props.match.params.id;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonId));
  }, [dispatch, pokemonId]);

  const { profile, status, species } = useSelector((state) => state.pokemonDetails);
  const name = !_.isEmpty(profile) && profile.name.toUpperCase();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}>
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  };

  return (
    <>
    {status === 'completed' ?
      <Container className={classes.padding} fixed>
        <Card>
          <CardHeader
            titleTypographyProps={{ variant: "h4" }}
            avatar={
              <Avatar
                src={require(`../../images/${pokemonId}.png`)}
                className={classes.avatar}/>
            }
            title={name}
            className={classes.header}></CardHeader>
          <CardContent>
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab label="Statistics" />
                <Tab label="Profile" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <PokemonStats {...profile}/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PokemonProfile profile={profile} species={species}/>
              </TabPanel>
            </Paper>
          </CardContent>
        </Card>
      </Container> :  <CircularProgress color="secondary" className={classes.progress}/>}
    </>
  );
};

export default PokemonDetails;
