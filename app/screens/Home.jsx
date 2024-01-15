import { FlatList, TouchableOpacity, View } from "react-native";
import DashHeader from "../components/Dashboard/DashHeader";
import DashSearch from "../components/Dashboard/DashSearch";
import DashCategories from "../components/Dashboard/DashCategories";
import DashDoctorCard from "../components/Dashboard/DashDoctorCard";
import InstantAppionment from "../components/Dashboard/InstantAppionment";
import { DOCTORS } from "../data/Doctors";
import { useEffect } from "react";
import ProctedRoute from "../utils/ProctedRoute";
import { isUser } from "../utils/ProctedRoute";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  useEffect(() => {
    ProctedRoute(navigation);
  }, [isUser]);

  function handleSingleDoctor(doctor) {
    navigation.navigate("SingleDoctor", { doctor });
  }

  const searchValue = useSelector((state) => state.search.text);
  const filteredDoctors = DOCTORS.filter((doctor) =>
    //   doctor.degignation.toLowerCase().includes(searchValue.toLowerCase()) ||
    doctor.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <View>
      <DashHeader />
      <View className=" px-8">
        <DashSearch />
        <DashCategories navigation={navigation} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          className="my-3"
          data={filteredDoctors}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSingleDoctor(item)}
              className="mr-3 pb-2"
            >
              <DashDoctorCard doctor={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <InstantAppionment />
      </View>
    </View>
  );
};

export default Home;
