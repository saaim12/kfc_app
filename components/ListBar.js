import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

function ListBar(props) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        horizontal
        data={props.data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.des}>{item.des}</Text>
            <Text style={styles.price}>Price: Rs {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  itemContainer: {
    width: 300,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    textAlign: "center",
    color: "#009FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  des: {
    fontSize: 14,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF4500",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ListBar;
