import { Canvas, Image, useImage } from '@shopify/react-native-skia';

const ImageComponent = ({ path }) => {
  const image = useImage(require(path));
  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={image} fit="contain" x={0} y={0} width={256} height={256} />
    </Canvas>
  );
};

export default ImageComponent;
