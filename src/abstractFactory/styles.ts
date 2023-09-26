import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lightButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButton: {
    backgroundColor: 'darkblue',
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightHeader: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  darkHeader: {
    backgroundColor: 'darkgray',
    padding: 10,
  },
  darkButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  lightButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});

export default styles;
