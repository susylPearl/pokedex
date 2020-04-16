import React from "react";
import StyledRow from '../StyledRow';

const PokemonStats = (pokemon) => {
  return (
    <>
      {pokemon.stats.map((stats, index) => (
        <StyledRow
          key={index}
          name={stats.stat.name}
          value={stats.base_stat}/>
      ))}
    </>
  );
};

export default PokemonStats;
