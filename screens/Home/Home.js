import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
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
