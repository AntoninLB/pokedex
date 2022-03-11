import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";

import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import { getPokemon } from "../api/getPokemons";

import TitlePokemon from "../components/TitlePokemon";

export default function Home() {
  const [listPokemons, setListPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    !isLoading && loadPokemon(nextPage);
  }, []);

  console.log(isLoading);
  loadPokemon = (url) => {
    setIsLoading(true);
    getPokemon(url).then((datas) => {
      setTimeout(() => {
        setListPokemon([...listPokemons, ...datas.results]);
        setNextPage(datas.next);
        setIsLoading(false);
      }, 3000);
    });
  };

  const renderItem = useCallback(
    ({ item }) => <TitlePokemon name={item.name} url={item.url} />,
    []
  );

  const keyExtractor = useCallback((item) => item.name);

  return (
    <View style={styles.container}>
      <FlatList
        data={listPokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadPokemon(nextPage);
        }}
        numColumns={2}
        columnWrapperStyle={styles.listColumn}
        onRefresh={loadPokemon}
        refreshing={isLoading}
        contentContainerStyle={styles.pokemonList}
        ListFooterComponent={() =>
          isLoading && (
            <View style={styles.loader}>
              <ActivityIndicator size={"large"} color={"blue"} />
            </View>
          )
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "#fff",
  },
  pokemonList: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
  },
  loader: {
    marginTop: "30%",
    height: "20%",
  },
  listColumn: {
    justifyContent: "space-around",
  },
});
