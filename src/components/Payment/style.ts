import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 14,
    width: '100%',
    // height: 100,
    borderTopWidth: 1,
    borderTopColor: Colors.pinkMedium,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  infoContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 50,
    color: Colors.pinkMedium,
    paddingHorizontal: 24,
  },
  itemText: {
    fontSize: 22,
    color: Colors.pinkMedium,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: Colors.green,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
  },
});
