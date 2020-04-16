import React, { useEffect } from "react";
import _ from 'underscore';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchPokemonList } from "../../actions/pokemonDataAction";
import { submitSearch, clearSearch } from "../../actions/pokemonSearchAction";
import PokemonItem from "./PokemonItem";
import PokemonSearch from "../PokemonSearch/PokemonSearch";


const PokemonList = () => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      height: '100%',
      background: 'aliceBlue',
    },
    search: {
      background: "darkcyan",
      width: "inherit",
      textAlign: "-webkit-center",
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
    },
  }));

  const dispatch = useDispatch();
  const classes = useStyles();
  const { pokemonList, status } = useSelector((state) => state.pokemonList);
  const { searchedList, text } = useSelector((state) => state.searchedList);
  const totalPokemons = _.isEqual(text, 'Searched') ? searchedList : pokemonList;

  useEffect(() => {
    dispatch(fetchPokemonList());
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  const handleSearch = (text, filterValue) => {
    dispatch(submitSearch(filterValue, text, pokemonList));
    return () => {
      dispatch(clearSearch());
    };
  };

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid className={classes.search}>
          <PokemonSearch handleSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          {status === "completed" ? (
            <>
              <h1>
                <strong>Pokemons</strong>
              </h1>
              <Grid container justify="center" spacing={2}>
                {totalPokemons && totalPokemons.length > 0 ? 
                  totalPokemons.map((item, index) => (
                    <PokemonItem
                      key={item.name}
                      id={index + 1}
                      pokemon={item}/>
                  ))
                 : 
                  <div className="noPokemonFound">
                    <p>Pokemon Not Found...</p>
                  </div>
                }
              </Grid>
            </>
          ) : (
            <CircularProgress color="secondary" className={classes.progress} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PokemonList;
