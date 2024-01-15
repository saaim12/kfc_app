import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function ListItems(props) {
  return (
    <FlatList
      data={props.data}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.imagecontainer}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.des}>{item.des}</Text>
            <Text style={styles.price}>Price: Rs {item.price}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1, // Allow item container to grow and occupy available space
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  imagecontainer: {
    height: Dimensions.get("window").width / 2 - 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  itemDetails: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  des: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    color: "red",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  btntext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default ListItems;
