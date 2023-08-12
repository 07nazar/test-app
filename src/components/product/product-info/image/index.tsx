import { FC } from 'react';
import ReactImageMagnify from 'react-image-magnify';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = ({ alt, src }) => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: alt,
            src: `https://testbackend.nc-one.com${src}`,
            isFluidWidth: false,
            height: 448,
            width: 448,
          },
          largeImage: {
            src: `https://testbackend.nc-one.com${src}`,
            width: 800,
            height: 1400,
          },
          enlargedImageContainerDimensions: {
            width: '170%',
            height: '100%',
          },
        }}
      />
    </div>
  );
};
