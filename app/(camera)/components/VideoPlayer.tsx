import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';

interface VideoPlayerProps {
  video: { path: string };
}

const VideoPlayer = ({ video }: VideoPlayerProps) => (
  <Video
    style={styles.video}
    source={{ uri: video.path }}
    useNativeControls
    isLooping
  />
);

export default VideoPlayer;

const styles = StyleSheet.create({
  video: { flex: 1 },
});
