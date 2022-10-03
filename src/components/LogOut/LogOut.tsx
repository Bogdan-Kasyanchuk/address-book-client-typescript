import { FC } from 'react';
import styled from 'styled-components';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Modal from '../Modal/Modal';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import { accentColor } from '../../styles/variables';

const LogOut: FC<{ closeModalLogOut: () => void }> = ({ closeModalLogOut }) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);

  const logOut = (): void => {
    dispatch(logOutUser());
    closeModalLogOut();
  };

  return (
    <Modal modalHundler={closeModalLogOut}>
      <Text>{userName ?? 'User'}, are you sure you want to exit?</Text>
      <ButtonGroup>
        <Button text buttonHundler={logOut}>
          Ok
        </Button>
        <Button text buttonHundler={closeModalLogOut}>
          Cancel
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default LogOut;

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  line-height: 1.3;
`;
