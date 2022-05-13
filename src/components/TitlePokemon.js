import { StyleSheet, Image, Text } from "react-native";
import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function TitlePokemon({ name, url, navigation, image }) {
  const [pokemonData, setPokemonData] = useState();
  const [loadingPokemonData, setLoadingPokemonData] = useState(true);

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

  const onPokemonPress = () => {
    navigation.navigate("Details", { data: pokemonData });
  };

  return (
    <Container style={styles.container}>
      <MainButton onPress={onPokemonPress}>
        <Image
          source={{ uri: image ? image : pokemonData.sprites.front_default }}
          style={{ width: 100, height: 100 }}
        />

        <Label style={styles.text}>{name}</Label>
      </MainButton>
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
  /* box-shadow: 2px 2px 2px; */

  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const MainButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
