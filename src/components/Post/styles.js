import {StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
container: {
    width: '100%',
    height: Dimensions.get('window').height - 70,
},

video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},

uiContainer:{
    height: '100%',
    justifyContent: 'flex-end'
},
bottomContainer:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
},
handle:{
    color : '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
},
description: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 10,
},
songRow:{
    flexDirection: 'row',
    alignItems: 'center'
},
songName:{
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
},
songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#3e3e3e"
},

//right container
rightContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    height: 300,
    marginRight: 5,
},

profilePicture:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white'
},
iconContainer:{
    alignItems: 'center'
},

statsLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
}
});

export default styles;