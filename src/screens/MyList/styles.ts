import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex:1,
      width:"100%",
      paddingTop:40,
      paddingBottom:16,
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor:'#dcdcdc'
    },
    listContainer:{
        flex:1,
        width:"100%",
        
    },
    verticalView:{
        display:'flex',
        flexDirection:'column'
    },
    horizontalView:{
        display:'flex',
        flexDirection:'row'
    },
    listHeader:{
        width:"100%",
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#6750A4',

    },
    listContentWrapper:{
        flex:1,
        height:"80%",
        paddingVertical:10,
        paddingHorizontal:4,
        marginBottom:10,

        backgroundColor:'#cdcdcd',
        
    },
    buttonWrapper:{
        paddingHorizontal:10,
    }
  });