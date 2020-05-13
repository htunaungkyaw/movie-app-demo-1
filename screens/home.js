import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-native-anchor-carousel";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [background, setBackground] = useState({
    uri:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    name: "Avengers: End Game",
    stat: "2019 . Action/Sci-fi 3h 2m",
    desc:
      "After Thanos, an intergalatic warlord, disintegrate half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  });

  const [gallery, setGallery] = useState([
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      title: "Avengers: End Game",
      released: "2019 . Action/Sci-fi 3h 2m",
      desc:
        "After Thanos, an intergalatic warlord, disintegrate half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      key: "1",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOTMwY2EwZjctMGYwMi00Mzg3LWJlZTAtZWMyODgzYTQ4ZTU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
      title: "Roped 2020",
      released: "2020",
      desc:
        "A progressive town erupts when a traveling rodeo lands within a it's city limits. The town councilman butts head with a young cowboy on his rise to super stardom. When the councilman's daughter falls in love with the cowboy their battle becomes deeply personal.",
      key: "2",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTcyNDllY2EtNWIxMC00NzE1LWFkYzEtM2QxZDgxY2I1MzRhXkEyXkFqcGdeQXVyMDE3NjA0NQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      title: "The Stand at Paxton County",
      released: "2 May 2020",
      desc:
        "U.S. Army combat medic, Janna Connelly is summoned home to help her estranged father after he suffers a heart attack. She discovers their once-pristine ranch now in disrepair and a local Sheriff with nefarious ties targeting local ranchers livestock. Janna now finds herself confronting her buried emotional past as she wages war against corrupt political forces. Inspired by the true events of Gary Dassinger, a Dickinson, ND rancher, and his 2017 fight to save his horses from government seizure",
      key: "3",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNTE0M2ZiNTgtNjQ5MC00MDBjLWExNmUtYzUxYjk2ODM4NmNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      title: "Lady Driver",
      released: "2 May 2020",
      desc:
        "When a rebellious teen embarks on a solo summer journey to connect with her roots, she finds herself in a new world, geared up for the ride of her life, and discovers she had the drive in her all along.",
      key: "4",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMDRjMmUzMTEtMWJiMC00MDUwLWExOGQtNDU2ZTU0Y2RmY2YzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      title: "Dangerous Lies",
      released: "30 April 2020",
      desc:
        "When a wealthy elderly man dies and unexpectedly leaves his estate to his new caregiver, she's drawn into a web of deception and murder. If she's going to survive, she'll have to question everyone's motives - even the people she loves.",
      key: "5",
    },
  ]);

  const [list, setList] = useState([
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzc4YjM4ZTMtZDc3Ny00ODIxLWJkMzktMGIxOTBhZGY1YTYyXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_SX800_AL_.jpg",
      key: "1",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      key: "2",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      key: "3",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg",
      key: "4",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjI1ZjhmMzktMDZhMy00MDhjLTk3YjAtMTNlZTA5MDI3NzQ3XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_.jpg",
      key: "5",
    },
  ]);

  const carouselRef = useRef(null);
  const { width, height } = Dimensions.get("window");
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.searchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this Week
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                spreatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 0 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginHorizontal: 14 }}>
        <Text style={{ color: "white", fontWeight: "bold", marginBottom: 24 }}>
          Continue Watching
        </Text>
        <ImageBackground
          source={{
            uri:
              "https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon",
          }}
          style={{ height: 250, width: "100%", backgroundColor: "#000" }}
          resizeMode="cover"
        >
          <Text style={{ color: "white", padding: 14 }}>
            How to train your dragon
          </Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%",
            }}
          >
            <FontAwesome5
              name="play"
              size={22}
              color="#02ad94"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "normal" }}>
            View All
          </Text>
        </View>
        <FlatList
          horizontal={true}
          style={{ marginBottom: 30 }}
          data={list}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 300, width: 200 }}
                />
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8,
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.9,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 30,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  searchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2,173,148,0.2)",
    marginBottom: 14,
  },
});
export default Home;
