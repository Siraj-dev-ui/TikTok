import React from 'react'
import {View , Text , FlatList , Dimensions} from 'react-native'
import Post from '../../components/Post'
import posts from '../../../data/posts'

const post1 = {
    id: 'p1',
    videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
      id: 'u1',
      username: 'Siraj',
      imageUri: 'https://scontent.fuet2-1.fna.fbcdn.net/v/t1.6435-9/122086233_2787973838146850_911231202114719127_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XSWnHS6cdXUAX85un3E&_nc_ht=scontent.fuet2-1.fna&oh=196859bf6e490f7343cfd347085894b9&oe=608F0DA5',
    },
    description: 'Great Larkay.. @Zain',
    songName: 'NF - The search',
    songImage: 'https://scontent.fuet2-1.fna.fbcdn.net/v/t1.6435-9/122086233_2787973838146850_911231202114719127_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XSWnHS6cdXUAX85un3E&_nc_ht=scontent.fuet2-1.fna&oh=196859bf6e490f7343cfd347085894b9&oe=608F0DA5',
    likes: 123,
    comments: 12,
    shares: 44,
  }
const Home = () => {
    return (
        <View>
        {/* <Post post={post1}/> */}
        <FlatList 
        data={posts}
        renderItem={({item}) => <Post post={item}/>}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 70}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        />
        </View>
    ) 
}

export default Home