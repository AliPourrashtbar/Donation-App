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
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  highLightedImage: {
    width: '100%',
    height: 170,
  },
  categories: {
    marginLeft: 20,
    marginTop: 10,
  },
  categoryHeader: {
    marginHorizontal: 34,
    marginVertical: 12,
  },
});
export default style;
