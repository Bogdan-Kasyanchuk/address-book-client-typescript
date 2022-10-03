import { FC, useRef } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { IAvatarEditProps } from '../../interfaces';

const AvatarEdit: FC<IAvatarEditProps> = ({
  imagePreview,
  userAvatar,
  deleteAvatar,
  loadAvatar,
}) => {
  const refInput = useRef<HTMLInputElement>(null);

  const clickInputAvatar = () => {
    refInput.current?.click();
  };

  return (
    <Box>
      <ImageWrapper>
        <Avatar src={imagePreview ? imagePreview : userAvatar} alt={'Avatar'} />
      </ImageWrapper>
      <ButtonWrapper>
        <Button text buttonHundler={deleteAvatar}>
          Delete
        </Button>
        <Button text buttonHundler={clickInputAvatar}>
          Upload
        </Button>
      </ButtonWrapper>
      <Input
        accept="image/*"
        type="file"
        onChange={loadAvatar}
        ref={refInput}
      />
    </Box>
  );
};

export default AvatarEdit;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  height: 110px;
`;

const ImageWrapper = styled.div`
  width: 110px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Input = styled.input`
  display: none;
`;
