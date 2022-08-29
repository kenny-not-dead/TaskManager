
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = props => {
  return (
   <View style={styles.container}> 
        <Text style={styles.text}>
            {props.title}
        </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: 70,
      alignItems: "center",
      justifyContent:  'flex-end',
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderColor: 'grey',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },

    text: {
      fontSize: 18,
      fontWeight: "bold"
    }
  });

  