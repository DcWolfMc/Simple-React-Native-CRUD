import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#dcdcdc'
  },
  contenteWrapper: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header:{
    width:"100%",
    marginBottom:20,
    paddingVertical:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#6750A4',

},
  picker: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#6750A4',
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  inputWrapper: {
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,

  },
  buttonWrapper:{
    width:"100%",
    paddingHorizontal:10,
}
});