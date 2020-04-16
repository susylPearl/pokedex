import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const PokemonItem = ({ id, pokemon }) => {
  const useStyles = makeStyles({
    root: {
      height: 200,
      width: 200,
      margin: 10,
      background: "bisque",
    },
    media: {
      height: 140,
      backgroundSize: "auto",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/pokemon/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require(`../../images/${id}.png`)}
              title={pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {pokemon.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default PokemonItem;
