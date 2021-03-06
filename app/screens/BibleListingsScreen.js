import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BibleCard from "../components/BibleCard";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Matthew Study Guide",
    description:
      "Study the gospel of Matthew in-depth with John's handy guide.",
    image: require("../assets/gtylogo.jpg"),
  },
  {
    id: 2,
    title: "Luke Study Guide",
    description: "Study the gospel of Luke in-depth with John's handy guide.",
    image: require("../assets/gtylogo.jpg"),
  },
];

function BibleListingsScreen({ navigation }) {
  // console.log(listings);

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <BibleCard
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate("BibleListingDetails")}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
  },
});

export default BibleListingsScreen;
