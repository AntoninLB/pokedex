import { StyleSheet, Image, Text } from "react-native";
import { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

export default function TitlePokemon(props) {
  const [pokemonData, setPokemonData] = useState();
  const [loadingPokemonData, setLoadingPokemonData] = useState(true);
  const { name, url } = props;
  const getPokemonItem = () =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

  useEffect(() => {
    getPokemonItem(url).then((data) => {
      setPokemonData(data);
      setLoadingPokemonData(false);
    });
  }, []);

  if (loadingPokemonData) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container style={styles.container}>
      <Image
        source={{ uri: pokemonData.sprites.front_default }}
        style={{ width: 100, height: 100 }}
      />
      <Label style={styles.text}>{name}</Label>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    alignItems: "center",
  },
});

const Label = styled(Text)`
  font-size: 16px;
`;

const Container = styled(View)`
  width: 45%;
  border: 1px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 10px;
`;
