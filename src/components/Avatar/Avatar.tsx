import { FC } from 'react';
import styled from 'styled-components';
import { firstColor } from '../../styles/variables';
import { IAvatarProps } from '../../interfaces';

const Avatar: FC<IAvatarProps> = ({ src, alt }) => {
  return <Image src={src as string} alt={alt} />;
};

export default Avatar;

const Image = styled.img`
  border: 1px solid ${firstColor};
  border-radius: 50%;
  background-color: ${firstColor};
`;
