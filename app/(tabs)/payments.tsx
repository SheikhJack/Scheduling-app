import { StyleSheet, Text, Platform, ScrollView } from 'react-native';
import React from 'react';

export default function Payments() {
  return (
    <ScrollView>
      <Text>
        Log In 
      </Text>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
