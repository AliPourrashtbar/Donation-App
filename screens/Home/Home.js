import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import Search from '../../components/Search/Search';
import DonateSingleItem from '../../components/DonateSingleItem/DonateSingleItem';

const Home = () => {
  return (
    <View style={style.container}>
      {/* <Search
        onSearch={value => {
          console.log(value);
        }}
      /> */}
      <ScrollView horizontal={true}>
        <DonateSingleItem
          uri="https://static.vecteezy.com/system/resources/thumbnails/000/347/962/small/Free-Cactus-Vector-.png"
          price={44}
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
        />
        <DonateSingleItem
          uri="https://static.vecteezy.com/system/resources/thumbnails/000/347/962/small/Free-Cactus-Vector-.png"
          price={44}
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
        />
      </ScrollView>
    </View>
  );
};

export default Home;
