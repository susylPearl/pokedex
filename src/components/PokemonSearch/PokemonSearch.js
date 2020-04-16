import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import SearchFilter from "./SearchFilter";
import { fetchPokemonList } from "../../actions/pokemonDataAction";

const PokemonSearch = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: 'flex',
      alignItems: 'center',
      margin: '46px 46px 12px 46px',
      maxWidth: '60%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('name');

  const handleInputChange = (e) => {
    props.handleSearch(e.target.value, filterValue);
  };

  const setSearchType = (type) => {
    setFilterValue(type);
    if(type === 'name') dispatch(fetchPokemonList());
  };

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for Pokemon..."
          inputProps={{ "aria-label": "search for pokemon" }}
          onChange={handleInputChange}/>
          <SearchIcon />
      </Paper>
      <SearchFilter setValue={setSearchType}/>
    </>
  );
};

export default PokemonSearch;
