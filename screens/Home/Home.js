import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Search from '../../components/Search/Search';
import DonateSingleItem from '../../components/DonateSingleItem/DonateSingleItem';
import Header from '../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.introText}>Hello,</Text>
        <View style={style.userName}>
          <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
        </View>
      </View>
    </View>
  );
};

export default Home;
