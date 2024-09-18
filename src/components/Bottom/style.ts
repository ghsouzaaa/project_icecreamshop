import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderTopWidth: 1,
    borderTopColor: Colors.pinkMedium,
    backgroundColor: Colors.pinkLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: Colors.grey,
  },
});
