import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
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
      <ScrollView>
        <View style={style.header}>
          <View>
            <Text style={style.introText}>Hello,</Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <Search />
        </View>
        <TouchableOpacity>
          <Image
            style={style.highLightedImage}
            source={require('../../assets/img/highLighted.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
