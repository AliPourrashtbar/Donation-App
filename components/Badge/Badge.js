import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Badge = ({title}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;
  const calculateWidth = () => {
    const textWidth = textRef.current?.measure(width => width) || 0;
    setWidth(textWidth);
  };

  return (
    <View style={[style.Badge, {width: paddingHorizontal * 2 + width}]}>
      <Text
        onLayout={calculateWidth}
        ref={textRef}
        style={style.title}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
