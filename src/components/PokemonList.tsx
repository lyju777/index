import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

import {
  fetchPokemonList,
  fetchPokemonDetails,
  fetchPokemonSpecies,
} from "@/api/pokemonService";
import { PokemonDetails } from "@/types/types";
import "@/components/styles/PokemonList.scss";
import { translatePokemonType } from "@/locales/pokemonTypes";
import { PokemonTypeButton } from "@/components/styles/common/CustomStyles";

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

        const species = await Promise.all(
          list.data.results.map((pokemon) => fetchPokemonSpecies(pokemon.name))
        );

        const findKoName = await species.map((species) =>
          species.data.names.find((name) => name.language.name === "ko")
        );

        setPokemonList(
          details.map((pokemon, index) => ({
            ...pokemon.data,
            language_ko: {
              name: findKoName[index]?.name || pokemon.data.name,
            },
          }))
        );

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
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
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
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={pokemon.language_ko.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {pokemon.language_ko.name}
                </Typography>
                <Typography variant="body2">
                  {pokemon.types.map((type) => (
                    <PokemonTypeButton
                      bgColor={translatePokemonType(type.type.name).color}
                      variant="contained"
                      key={type.type.name}
                      size="small"
                    >
                      {translatePokemonType(type.type.name).translation}
                    </PokemonTypeButton>
                  ))}
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
