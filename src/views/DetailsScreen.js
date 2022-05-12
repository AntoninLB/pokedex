import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailsScreen({ route, navigation }) {
  const { data } = route.params;

  console.log(data.abilities);

  const abilities = data.abilities.map((item, index) => {
    console.log(item.ability.name);
    return <Text key={index}>{item.ability.name}</Text>;
  });

  const addTeam = async () => {
    try {
      const jsonValue = JSON.stringify(data);

      await AsyncStorage.setItem("Team", jsonValue);
      console.log("STORED");
    } catch (e) {
      console.log("ERREUR", e);
    }
  };

  return (
    <Container>
      <Header>
        <PokemonImage source={{ uri: data.sprites.front_default }} />
        <PokemonNameContainer>
          <PokemonName>{data.name}</PokemonName>
        </PokemonNameContainer>
      </Header>
      {abilities}
      <AddTeamButton onPress={addTeam}>
        <Text>Ajouter à mon équipe</Text>
      </AddTeamButton>
    </Container>
  );
}

const Container = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PokemonImage = styled(Image)`
  height: 100px;
  width: 100px;
`;

const AddTeamButton = styled(TouchableOpacity)`
  border: 2px;
  width: 300px;
  height: 40px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Header = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const PokemonName = styled(Text)`
  font-size: 24px;
`;

const PokemonNameContainer = styled(View)`
  display: flex;
  justify-content: center;
`;
