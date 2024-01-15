import { StatusBar } from "react-native";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import ListItems from "./components/ListItems";
import ListBar from "./components/ListBar";

export default function App() {
  const data = [
    {
      title: "Krunch Burger",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png",
      des: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: 270,
    },
    {
      title: "Zingeratha",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-zingeratha_variant_0-2023-05-31115706.png",
      des: "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
      price: 350,
    },
    {
      title: "Rice and Spice",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-rice-and-spice_variant_0-2023-05-31115706.png",
      des: "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
      price: 350,
    },
    {
      title: "Twister",
      url: "https://www.kfcpakistan.com/images/337af8e0-0461-11ee-a89a-612c84c58a93-twister_variant_0-2023-06-06115641.png",
      des: "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla",
      price: 400,
    },
    {
      title: "3 Pcs Chicken",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-3pc-Chikcen_variant_0-2023-05-31115706.png",
      des: "3 pieces of Hot and Crispy Fried Chicken",
      price: 620,
    },
    {
      title: "Krunch Burger + Drink",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch+drink-2023-05-31115706.png",
      des: "1 Krunch burger + 1 Regular drink",
      price: 370,
    },
    {
      title: "Krunch Combo",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
      des: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
      price: 520,
    },
    {
      title: "Krunch Chicken Combo",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-krunch-with-combo-2023-05-31115706.png",
      des: "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular drink",
      price: 530,
    },
    {
      title: "Chicken and Chips",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png",
      des: "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
      price: 550,
    },
    {
      title: "Twister Combo",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      des: "Twister + 1 Regular fries + 1 Regular drink",
      price: 670,
    },
    {
      title: "Zinger Burger",
      url: "https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-Zinger_variant_0-2023-06-07091210.png",
      des: "Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun",
      price: 550,
    },
    {
      title: "Zinger Stacker",
      url: "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Stacker_variant_0-2023-06-06115641.png",
      des: "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a sesame seed bun",
      price: 590,
    },
    {
      title: "Kentucky Burger",
      url: "https://www.kfcpakistan.com/images/332ab600-0461-11ee-8f91-addd12cf7fa1-Kentucky_variant_0-2023-06-06115641.png",
      des: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun",
      price: 590,
    },
    {
      title: "Mighty Zinger",
      url: "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png",
      des: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
      price: 700,
    },
    {
      title: "Zinger Combo",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zinger-combo-2023-05-31115706.png",
      des: "Zinger burger + 1 Regular fries+ 1 Regular drink",
      price: 820,
    },
    {
      title: "Zinger Stacker Combo",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
      des: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: 850,
    },
    {
      title: "Kentucky Burger Combo",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-kenteky-combo-2023-05-31115706.png",
      des: "Kentucky burger + 1 Regular fries+ 1 Regular drink",
      price: 850,
    },
    {
      title: "Mighty Zinger Combo",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-mighty-Combo-2023-05-31115706.png",
      des: "Mighty Zinger+ 1 Regular fries + 1 Regular drink",
      price: 960,
    },
    {
      title: "Crispy Box",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-CrispyBox-2023-05-31115706.png",
      des: "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
      price: 650,
    },
    {
      title: "Boneless Box",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-BonelessBox-2023-05-31115706.png",
      des: "Hassle free boneless experience with 4 Chicken strips + 1 Coleslaw + 1 Regular fries + 1 Regular drink + 1 Dip + 1 Dinner roll",
      price: 670,
    },
    {
      title: "Wow Box",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-WowBox-2023-05-31115706.png",
      des: "Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw",
      price: 950,
    },
    {
      title: "Crispy Duo Box",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png",
      des: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
      price: 1250,
    },
    {
      title: "Xtreme Duo Box",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-XtremeDuoBox-2023-05-31115706.png",
      des: "The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
      price: 1450,
    },
    {
      title: "Value Bucket",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-value-Bucket-2023-05-31115706.png",
      des: "Our pride and joy: hand-breaded and fried to perfection in house. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. Rs. 50 from Every Bucket Sold Goes to Mitao Bhook Foundation.",
      price: 1890,
    },
    {
      title: "Family Festival 1",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-family-Festivle-1-2023-05-31115706.png",
      des: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
      price: 2050,
    },
    {
      title: "Family Festival 2",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-Family-Festivle-2-2023-05-31115706.png",
      des: "A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
      price: 2250,
    },
    {
      title: "Family Festival 3",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
      des: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
      price: 2450,
    },
    {
      title: "Dinner Roll",
      url: "https://www.kfcpakistan.com/images/62153aa0-0513-11ee-8eee-c7aabf77bad4-Dinner-Roll-copy_variant_0-2023-06-07091210.png",
      des: "Dinner Roll",
      price: 50,
    },
    {
      title: "Mineral Water 500ml",
      url: "https://www.kfcpakistan.com/images/61ea8120-0513-11ee-b037-a334837c64cb-Water_variant_0-2023-06-07091210.png",
      des: "KFC Pakistan",
      price: 90,
    },
    {
      title: "Coleslaw",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-Coleslaw_variant_0-2023-05-31115706.png",
      des: "Sliced cabbage and carrots tossed in mayo",
      price: 100,
    },
    {
      title: "Pepsi Regular",
      url: "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-pepsicopy_variant_0-2023-06-06115641.png",
      des: "KFC Pakistan",
      price: 140,
    },
    {
      title: "Mirinda Regular",
      url: "https://www.kfcpakistan.com/images/337af8e0-0461-11ee-a89a-612c84c58a93-Mirinda_variant_0-2023-06-06115641.png",
      des: "KFC Pakistan",
      price: 140,
    },
    {
      title: "Mountain Dew Regular",
      url: "https://www.kfcpakistan.com/images/337af8e0-0461-11ee-a89a-612c84c58a93-Dew_variant_0-2023-06-06115641.png",
      des: "KFC Pakistan",
      price: 140,
    },
    {
      title: "7UP Regular",
      url: "https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-7up_variant_0-2023-06-07091210.png",
      des: "KFC Pakistan",
      price: 140,
    },
    {
      title: "1.5 Ltr Drink",
      url: "https://www.kfcpakistan.com/images/18d88330-f017-11ed-8a1e-df568680a232-1ltr1_variant_0-2023-05-11161551.png",
      des: "KFC Pakistan",
      price: 250,
    },
    {
      title: "Corn on the Cob",
      url: "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Corn_variant_0-2023-06-06115641.png",
      des: "Boiled sweet corn brushed with butter",
      price: 250,
    },
    {
      title: "Fries",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-RegularFries_variant_0-2023-05-31115706.png",
      des: "KFC Pakistan",
      price: 270,
    },
    {
      title: "One Piece Chicken",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-1PcChicken_variant_0-2023-05-31115706.png",
      des: "1 piece of Hot & Crispy Fried Chicken",
      price: 270,
    },
    {
      title: "Fries Bucket",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-FriesBucketwithMayoDip_variant_0-2023-05-31115706.png",
      des: "KFC Pakistan",
      price: 420,
    },
    {
      title: "Hot Shots",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-HotShots_variant_0-2023-05-31115706.png",
      des: "9 Pcs of hand-breaded Hot Shots",
      price: 420,
    },
    {
      title: "Plain Nuggets",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-3_variant_0-2023-05-31115706.png",
      des: "KFC Pakistan",
      price: 480,
    },
    {
      title: "Spicy Nuggets",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-3_variant_0-2023-05-31115706.png",
      des: "KFC Pakistan",
      price: 530,
    },
    {
      title: "Chicky Meal 1 with Toy",
      url: "https://www.kfcpakistan.com/images/aadb5980-0479-11ee-8dd9-5feb7f32ce9f-ChickyMeal1_variant_0-2023-06-06145149.png",
      des: "Krunch + Chicky Fries + Slice + Toy",
      price: 570,
    },
    {
      title: "Chicky Meal 2 with Toy",
      url: "https://www.kfcpakistan.com/images/aadb5980-0479-11ee-8dd9-5feb7f32ce9f-01_variant_0-2023-06-06145149.png",
      des: "4 Nuggets + Chicky Fries + Regular Drink + Toy",
      price: 570,
    },
    {
      title: "Salsa Sprinkle Wings Bucket",
      url: "https://www.kfcpakistan.com/images/6383e600-0538-11ee-9244-6d110563faa5-Salsawings(1)_variant_0-2023-06-07133704.png",
      des: "8 Pcs Salsa Sprinkle Wings Bucket",
      price: 580,
    },
    {
      title: "Thai Sweet Chili Wings",
      url: "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-HotWings_variant_0-2023-05-31115706.png",
      des: "8 Pcs of Hot Wings coated with a Sweet Thai Chili sauce, topped with sesame seeds",
      price: 580,
    },
    {
      title: "Tangy Masala Wings",
      url: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-HotWings_variant_0-2023-05-31115706.png",
      des: "8 pcs of Hot Wings coated in a sweet and tangy sauce, dusted with chaat masala",
      price: 580,
    },
    {
      title: "Buffalo Wings",
      url: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-HotWings_variant_0-2023-05-31115706.png",
      des: "8 Pcs of Hot Wings coated with a spicy Buffalo sauce, topped with chili flakes",
      price: 580,
    },
    {
      title: "Hot Wings Bucket",
      url: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png",
      des: "10 Pcs of our Signature Hot & Crispy Wings",
      price: 610,
    },
    {
      title: "Snack Bucket",
      url: "https://www.kfcpakistan.com/images/4e9ce970-05c0-11ee-b3d4-cde32594fefb-Snack-Bucket-2023-06-08055000.png",
      des: "4 Hot Wings+ 4 Hot Shots+ 2 Strips+ 1 Dip",
      price: 580,
    },
  ];
  const data2 = [
    {
      uri: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-value-Bucket-2023-05-31115706.png",
      title: "Value Bucket",
      des: "Our pride and joy: hand-breaded and fried to perfection in house. 9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger lickin' good. Rs. 50 from Every Bucket Sold Goes to Mitao Bhook Foundation.",
      price: "1890",
    },
    {
      uri: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-family-Festivle-1-2023-05-31115706.png",
      title: "Family Festivle 1",
      des: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
      price: "2050",
    },
    {
      uri: "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-family-Festivle-1-2023-05-31115706.png",
      title: "Family Festivle 2",
      des: "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink",
      price: "2450",
    },
  ];
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <View style={styles.imgview}>
        <Image
          source={{
            uri: "https://logodix.com/logo/376998.jpg",
          }}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <ListBar data={data2} />
      <ListItems data={data} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  imgview: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  img: {
    width: "50%",
    height: "100%",
    padding: 20,
    marginTop: 20,
  },
});
