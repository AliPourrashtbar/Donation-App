import {TouchableOpacity, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import style from './style';
const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  console.log(width);
  const paddingHorizantal = 33;
  const tabWidth = {
    width: paddingHorizantal * 2 + width,
  };
  return (
    <View style={[style.Badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.protoTypes = {
  title: PropTypes.string.isRequired,
};
export default Badge;
