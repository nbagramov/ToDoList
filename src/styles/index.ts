import { StyleSheet } from 'react-native';
import { Style } from '../utils/interfaces';

export const styles = StyleSheet.create<Style>({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'lightskyblue',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    paddingHorizontal: 10,
    margin: 10,
    width: '90%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'blue',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 20,
    fontWeight: '400',
  },
  inputItem: {
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 16,
    fontWeight: '400',
    paddingRight: 10,
  },
  flatlistContainer: {
    alignContent: 'flex-start',
    width: '90%',
    paddingVertical: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'blue',
    backgroundColor: 'white',
  },
  itemsTouch: {
    flex: 1,
    alignSelf: 'stretch',
  },
  itemsText: {
    fontSize: 20,
    fontWeight: '400',
  },
  itemsTextCrossed: {
    fontSize: 20,
    fontWeight: '400',
    color: 'lightgray',
    textDecorationLine: 'line-through',
    textDecorationColor: 'blue',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    paddingLeft: 5,
    borderLeftWidth: 1,
    borderLeftColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 5,
  },
  buttonTextSmall: {
    fontSize: 14,
    fontWeight: '400',
  },
});
