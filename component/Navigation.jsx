import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MovieDetails from "../screens/Home/MovieDetails";
import SeriesDetails from "../screens/Home/SeriesDetails";
import PeopleDetails from "../screens/Home/PeopleDetails";
import CollectionDetails from "../screens/Home/CollectionDetails";
import SearchScreen from "../screens/SearchScreen";
import CollectionsScreen from "../screens/CollectionsScreen";
import MyListScreen from "../screens/MyListScreen";
import WatchList from "../screens/MyList/WatchList";
import Favorites from "../screens/MyList/Favorites";
import WaitingList from "../screens/MyList/WaitingList";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfile from "../screens/Profile/EditProfile";

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode={"none"}>
    <HomeStack.Screen name={"Home"} component={HomeScreen} />
    <HomeStack.Screen name={"HomeMovieDetails"} component={MovieDetails} />
    <HomeStack.Screen name={"HomePeopleDetails"} component={PeopleDetails} />
    <HomeStack.Screen name={"HomeSeriesDetails"} component={SeriesDetails} />
  </HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
export const SearchStackScreen = () => (
  <SearchStack.Navigator headerMode={"none"}>
    <SearchStack.Screen name={"Search"} component={SearchScreen} />
    <SearchStack.Screen name={"SearchMovieDetails"} component={MovieDetails} />
    <SearchStack.Screen
      name={"SearchPeopleDetails"}
      component={PeopleDetails}
    />
    <SearchStack.Screen
      name={"SearchSeriesDetails"}
      component={SeriesDetails}
    />
    <SearchStack.Screen
      name={"SearchCollectionDetails"}
      component={CollectionDetails}
    />
  </SearchStack.Navigator>
);

const CollectionStack = createStackNavigator();
export const CollectionStackScreen = () => (
  <CollectionStack.Navigator headerMode={"none"}>
    <CollectionStack.Screen
      name={"Collections"}
      component={CollectionsScreen}
    />
    <CollectionStack.Screen
      name={"CollectionMovieDetails"}
      component={MovieDetails}
    />
  </CollectionStack.Navigator>
);

const MyListStack = createStackNavigator();
export const MyListStackScreen = () => (
  <MyListStack.Navigator headerMode={"none"}>
    <MyListStack.Screen name={"MyList"} component={MyListScreen} />
    <MyListStack.Screen name={"MyListMovieDetails"} component={MovieDetails} />
    <MyListStack.Screen
      name={"MyListSeriesDetails"}
      component={SeriesDetails}
    />
    <MyListStack.Screen name={"Watchlist"} component={WatchList} />
    <MyListStack.Screen name={"Favorites"} component={Favorites} />
    <MyListStack.Screen name={"WaitingList"} component={WaitingList} />
  </MyListStack.Navigator>
);

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode={"none"}>
    <ProfileStack.Screen name={"Profile"} component={ProfileScreen} />
    <ProfileStack.Screen name={"EditProfile"} component={EditProfile} />
    <MyListStack.Screen name={"ProfileMovieDetails"} component={MovieDetails} />
  </ProfileStack.Navigator>
);
