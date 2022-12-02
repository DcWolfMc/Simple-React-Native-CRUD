import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      
    },
    verticalView:{
        display:'flex',
        flexDirection:'column'
    },
    horizontalView:{
        display:'flex',
        flexDirection:'row'
    },
    spaceBetween:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    listItem:{
        paddingHorizontal:10,
        marginBottom:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#6750A4',

        backgroundColor:'#dddddd',

    }
  });