import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <View style={style.container}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </View>
  );
};

export default Home;
