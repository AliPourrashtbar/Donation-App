import {TouchableOpacity, Text} from 'react-native';
import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import style from './style';
const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  console.log(width);
  const paddingHorizantal = 35;
  const tabWidth = {
    width: paddingHorizantal * 2 + width,
  };
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.tabId)}
      style={[style.Tab, props.isInactive && style.inactiveTab, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0]?.width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
Tab.default = {
  isInactive: false,
  onPress: () => {},
};
Tab.protoTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
  tabId: PropTypes.number.isRequired,
};
export default Tab;
