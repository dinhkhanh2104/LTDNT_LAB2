import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { PostType } from '~/interfaces/PostType';

export default function Post({
  avatarImage,
  username,
  title,
  postImage,
  like,
  comment,
  share,
}: PostType) {
  const [active, setActive] = useState(false);
  const [likeAmount, setLikeAmount] = useState(like);
  const [commentAmount, setCommentAmount] = useState(comment);
  const [shareAmount, setShareAmount] = useState(share);

          // Trần Đình Khánh - 21520984
  const handlePressLike = () => {
    setActive(!active);
    setLikeAmount((prev) => (active ? prev - 1 : prev + 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Image style={styles.avatar} source={{ uri: avatarImage }} />
        <Text style={styles.username}>{username}</Text>
      </TouchableOpacity>
      <Text style={styles.content}>{title}</Text>

      <View>
        <Image style={styles.picture} source={{ uri: postImage }} />
      </View>

      <View style={styles.reaction}>
        <Text style={styles.reactionText}>{likeAmount} Likes</Text>
        <Text style={styles.reactionText}>{commentAmount} Comments</Text>
        <Text style={styles.reactionText}>{shareAmount} Shares</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={handlePressLike}>
          <AntDesign
            name={active ? 'like1' : 'like2'}
            size={24}
            color={active ? 'blue' : 'black'}
          />
          <Text style={[styles.textButton, { color: active ? 'blue' : 'black' }]}>Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setCommentAmount(commentAmount + 1)}>
          <FontAwesome5 name="comment" size={24} color="black" />
          <Text style={styles.textButton}>Comments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setShareAmount(shareAmount + 1)}>
          <FontAwesome6 name="share-square" size={24} color="black" />
          <Text style={styles.textButton}>Shares</Text>
        </TouchableOpacity>
      </View>
    </View>
    // Trần Đình Khánh - 21520984
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: 200,
    // backgroundColor: 'red',
    borderRadius: 10,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  avatarFrame: {
    // objectFit: 'cover',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
  },
  picture: {
    width: '100%',
    aspectRatio: 16 / 9,
    objectFit: 'cover',
    borderRadius: 10,
  },
  reaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 4,
    // backgroundColor: "blue",
  },
  reactionText: {
    color: 'rgba(0,0,0,0.6)',
    // color: "red",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
