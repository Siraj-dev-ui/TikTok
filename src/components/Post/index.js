import React, { useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Post = (props) => {

    //const {post} = props
    const [post , setPost] = useState(props.post)
    const [isLiked , setIsLiked] = useState(false)
    const [paused , setPaused] = useState(false)
    
    const OnPlayPausePress = () => {
        setPaused(!paused)
    }

    const onLikePress = () => {
        const LiketoAdd = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + LiketoAdd
        })

        setIsLiked(!isLiked)
    }
    return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={OnPlayPausePress}>
        <Video
            source={{uri: post.videoUri }}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
        />
        </TouchableWithoutFeedback>
        
        <View style={styles.uiContainer}>

            {/* right container */}
            <View style={styles.rightContainer}>
                <Image 
                style={styles.profilePicture}
                source={{uri:post.user.imageUri}}
                />
           
            
            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <AntDesign name={'heart'} size={40}  color={isLiked ? 'red' : 'white'}/>
            <Text style={styles.statsLabel}>{post.likes}</Text>
            </TouchableOpacity>
            
            

            <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={40}  color='white'/>
            <Text style={styles.statsLabel}>{post.comments}</Text>
            </View>

            <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={'share'} size={40}  color='white'/>
            <Text style={styles.statsLabel}>{post.shares}</Text>
            </View>

            </View>
            
            {/* bottom container */}
            <View style={styles.bottomContainer}>
                <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.songRow}>
                <Entypo name={'beamed-note'} size={24}  color='white'/>
                <Text style={styles.songName}>{post.songName}</Text>
            </View>
            </View>
            <Image 
                style={styles.songImage}
                source={{uri:post.songImage}}
                />
            </View>
            
        </View>
    </View>
    );
};

export default Post;