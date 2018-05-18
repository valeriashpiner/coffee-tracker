import { StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: -50,
    },
    allNonMapThings: {
     // position: 'absolute',
      bottom: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '95%',
      shadowOpacity: 1,
      shadowRadius: 1,
      shadowColor: 'rgb(255,255,255)',
      shadowOffset: { height: 0, width: 0}
    },
    input: {
      elevation: 1,
      width: '100%',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 10,
    },
    inputContainer: {
      elevation: 1,
      backgroundColor: 'white',
      width: '85%',
      height: 40,
      borderRadius: 3,
      shadowOpacity: 0.75,
      shadowRadius: 1,
      shadowColor: 'gray',
      shadowOffset: { height: 0, width: 0}
    },
    button: {
      backgroundColor: 'rgb(202,161,114)',
      borderRadius: 2,
      width: 45,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOpacity: 0.75,
      shadowRadius: 1,
      shadowColor: 'rgb(255,255,255)',
      shadowOffset: { height: 0, width: 0}
    },
    filterImage: {
      width: 17,
      height: 17,
    },
  });