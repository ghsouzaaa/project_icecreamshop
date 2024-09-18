import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    paddingTop: 24,
  },
  listContainer: {
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.green,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 22,
    color: Colors.pinkMedium,
  },
});
