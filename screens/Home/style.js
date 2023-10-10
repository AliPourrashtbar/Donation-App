import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  introText: {
    color: '#636776',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.02,
    fontWeight: '400',
  },
  userName: {marginTop: 5},
  profileImage: {
    width: 50,
    height: 50,
  },
  highLightedImage: {
    width: '100%',
    height: 170,
  },
});
export default style;
