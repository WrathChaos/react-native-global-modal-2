import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  titleTextStyle: {
    fontWeight: '500',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 12,
  },
  iconContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3F8FF',
    borderRadius: 30,
  },
  iconImageStyle: {
    width: 13,
    height: 13,
    tintColor: '#36A8DB',
  },
  closeButton: {
    marginLeft: 'auto',
  },
  closeButtonImageStyle: {
    width: 13,
    height: 13,
    tintColor: '#8398AA',
  },
  descriptionContainer: {
    marginTop: 8,
    marginLeft: 43,
  },
  descriptionTextStyle: {
    color: '#627D99',
    lineHeight: 20,
    fontWeight: '400',
  },
});
