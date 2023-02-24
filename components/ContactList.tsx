import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Dinusha Ifonix',
      status:  'I ❤️ To Code and Teach!',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU',
    },
    {
      uid: 4,
      name: 'Thinith Ifonix',
      status:  'I ❤️ To Code and Teach!',
      imageUrl: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      uid: 2,
      name: 'Umanda Ifonix',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
    {
      uid: 3,
      name: 'Tharaka Ifonix',
      status:  'I ❤️ To Code and Teach!',
      imageUrl: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
 
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,

  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  userStatus: {
    fontSize: 12,
  },
});
