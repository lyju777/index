import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

import { fetchPokemonList, fetchPokemonDetails } from "@/api/pokemonService";
import { PokemonDetails } from "@/types/types";
import "@/components/styles/PokemonList.scss";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const list = await fetchPokemonList(151, 0);
        const details = await Promise.all(
          list.data.results.map((pokemon) => fetchPokemonDetails(pokemon.name))
        );
        setPokemonList(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  if (loading) {
    return <Typography>로딩 중...</Typography>;
  }

  return (
    <Container className="pokemon-list">
      <Grid container spacing={3}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.data.id}>
            <Card>
              <CardMedia
                className="pokemon-list__card-image"
                component="img"
                sx={{
                  height: 150,
                  width: "100%",
                  objectFit: "none",
                }}
                image={
                  pokemon.data.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={pokemon.data.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {pokemon.data.name}
                </Typography>
                <Typography variant="body2">
                  타입:{" "}
                  {pokemon.data.types.map((type) => type.type.name).join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;
