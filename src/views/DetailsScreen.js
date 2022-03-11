import { View, Text, Image, SafeAreaView } from "react-native";
import styled from "styled-components";

export default function DetailsScreen({ route, navigation }) {
  const { data } = route.params;

  console.log(data.abilities);

  const abilities = data.abilities.map((item, index) => {
    console.log(item.ability.name);
    return <Text key={index}>{item.ability.name}</Text>;
  });

  return (
    <Container>
      <Header>
        <PokemonImage source={{ uri: data.sprites.front_default }} />
        <PokemonNameContainer>
          <PokemonName>{data.name}</PokemonName>
        </PokemonNameContainer>
      </Header>
      {abilities}
    </Container>
  );
}

const Container = styled(View)``;
const PokemonImage = styled(Image)`
  height: 100px;
  width: 100px;
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
