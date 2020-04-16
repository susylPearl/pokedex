import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
    getHeight, getWeight, getGenderRatioFemale, getGenderRatioMale, getGrowthRate,
    getCatchRate, getHatchSteps, getAbilities, getEggGroups
} from '../../utilities/Constant';
import StyledRow from '../StyledRow';

const PokemonProfile = (props) => {

    const pokemon = props.profile;
    const species = props.species;

  return (
    <List component="nav">
      <ListItem >
        <ListItemText primary="Height: "/><p>{getHeight(pokemon.height) + 'ft'}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Weight: "/><p>{getWeight(pokemon.weight) + 'lbs'}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Hatch Steps: "/><p>{getHatchSteps(species.hatch_counter)}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Catch Rate: "/><p>{getCatchRate(species.capture_rate)}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Eggs Groups: "/><p>{getEggGroups(species.egg_groups)}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Abilities: "/><p>{getAbilities(pokemon.abilities)}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <ListItemText primary="Growth Rate: "/><p>{getGrowthRate(species.growth_rate.name)}</p>
      </ListItem>
      <Divider style={{ margin: '10px' }}/>
      <ListItem >
        <StyledRow name={'Male:'} value={getGenderRatioMale(species.gender_rate)}/>
        <StyledRow name={'Female:'} value={getGenderRatioFemale(species.gender_rate)}/>
      </ListItem>
    </List>
  );
};

export default PokemonProfile;
