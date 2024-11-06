import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from '../../../components/Post';
import { data1 } from '../../../data';
import { PostType } from '~/interfaces/PostType';

export default function index() {

  // Fake fetch data 
  const [data, setData] = useState<PostType[]>([])

  useEffect(() => {
    setData(data1);
  }, []);
  //                      Trần Đình Khánh - 21520984

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Social Media Feed</Text>
          </View>

          {data.map((post, index) => (
            <Post
              key={index}
              avatarImage={post.avatarImage}
              username={post.username}
              title={post.title}
              postImage={post.postImage}
              like={post.like}
              comment={post.comment}
              share={post.share}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#3598db',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
});
