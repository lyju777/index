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

const Home = () => {
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
    <Container>
      <Grid container spacing={3}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.data.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={
                  pokemon.data.sprites.other["official-artwork"].front_default
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

export default Home;
