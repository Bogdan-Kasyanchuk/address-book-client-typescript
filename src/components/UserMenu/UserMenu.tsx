import { FC, useState } from 'react';
import styled from 'styled-components';
import { getUserName, getUserAvatarUrl } from '../../redux/auth/auth-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import UserEdit from '../UserEdit/UserEdit';
import LogOut from '../LogOut/LogOut';
import notAvatar from '../../assets/img/notAvatar.png';
import { size, firstColor } from '../../styles/variables';

const UserMenu: FC = () => {
  const userName = useAppSelector(getUserName);
  const userAvatarUrl = useAppSelector(getUserAvatarUrl);
  const [isOpenModal, setIsOpenModal] = useState<{
    edit: boolean;
    logOut: boolean;
  }>({
    edit: false,
    logOut: false,
  });

  const userAvatar: string = userAvatarUrl ? userAvatarUrl : notAvatar;

  const openModalEdit = (): void => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = (): void => {
    setIsOpenModal({
      ...{
        edit: true,
        logOut: false,
      },
      edit: false,
    });
  };

  const openModalLogOut = (): void => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      logOut: true,
    });
  };

  const closeModalLogOut = (): void => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: true,
      },
      logOut: false,
    });
  };

  return (
    <Wrapper>
      <Box onClick={openModalEdit}>
        <ImageWrapper>
          <Avatar src={userAvatar} alt="Avatar" />
        </ImageWrapper>
        <Text>{userName}</Text>
      </Box>
      <Button
        icon
        text
        displayMobileMax
        buttonHundler={openModalLogOut}
        iconName="logout"
      >
        Logout
      </Button>
      {isOpenModal.edit && (
        <UserEdit userAvatar={userAvatar} closeModalEdit={closeModalEdit} />
      )}
      {isOpenModal.logOut && <LogOut closeModalLogOut={closeModalLogOut} />}
    </Wrapper>
  );
};

export default UserMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  max-height: 40px;
  cursor: pointer;

  ${size.tabletMin} {
    margin-right: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 34px;

  ${size.laptopMin} {
    width: 40px;
  }
`;

const Text = styled.p`
  margin-left: 10px;
  flex-basis: 25%;
  font-size: 14px;
  color: ${firstColor};
  line-height: 1.2;

  ${size['449Max']} {
    display: none;
  }

  ${size.laptopMin} {
    font-size: 16px;
    line-height: 1.25;
  }
`;
