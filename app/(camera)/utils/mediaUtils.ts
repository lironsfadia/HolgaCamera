import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { PhotoFile, VideoFile } from 'react-native-vision-camera';

export const saveMediaToGallery = async (media: PhotoFile | VideoFile) => {
  try {
    const result = await CameraRoll.save(media.path, {
      type: 'photo' in media ? 'photo' : 'video',
    });
    console.log('Media saved successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to save media:', error);
    throw error;
  }
};
