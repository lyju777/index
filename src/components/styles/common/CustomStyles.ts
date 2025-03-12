import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const PokemonTypeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor: string }>(({ bgColor }) => ({
  backgroundColor: bgColor || "inherit",
  color: "#fff",
  marginRight: "8px",
}));
