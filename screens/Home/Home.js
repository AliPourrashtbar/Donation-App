import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
const Home = () => {
  return (
    <View style={style.container}>
      <Header title={'Ali A.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('55');
        }}
      />
    </View>
  );
};

export default Home;
