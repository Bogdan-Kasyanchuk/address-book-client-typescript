import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ContactFavoriteEdit from '../ContactFavoriteEdit/ContactFavoriteEdit';
import Avatar from '../Avatar/Avatar';
import ContactContent from '../ContactContent/ContactContent';
import ContactEdit from '../ContactEdit/ContactEdit';
import ContactDelete from '../ContactDelete/ContactDelete';
import notAvatar from '../../assets/img/notAvatar.png';
import { size, accentColor } from '../../styles/variables';
import { IContactItemProps } from '../../interfaces';

const ContactItem: FC<IContactItemProps> = ({ element }) => {
  const [isOpenModal, setIsOpenModal] = useState<{
    edit: boolean;
    delete: boolean;
  }>({
    edit: false,
    delete: false,
  });

  const userAvatar: string = element.avatarUrl ? element.avatarUrl : notAvatar;

  const handlerContact = (e: MouseEvent<HTMLLIElement>): void => {
    const {
      nodeName,
      ariaLabel,
    }: { nodeName: string; ariaLabel: string | null } =
      e.target as HTMLLIElement;
    if (nodeName !== 'BUTTON') {
      return;
    } else {
      if (ariaLabel === 'edit') {
        openModalEdit();
      }
      if (ariaLabel === 'delete') {
        setIsOpenModal({
          ...{
            edit: false,
            delete: false,
          },
          delete: true,
        });
      }
    }
  };

  const openModalEdit = (): void => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = (): void => {
    setIsOpenModal({
      ...{
        edit: true,
        delete: false,
      },
      edit: false,
    });
  };

  const closeModalDelete = (): void => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: true,
      },
      delete: false,
    });
  };

  return (
    <>
      <Item onClick={handlerContact}>
        <ButtonWrapper>
          <Button icon iconName="edit" ariaLabel="edit" />
          <Button icon iconName="delete" ariaLabel="delete" />
        </ButtonWrapper>
        <ContactFavoriteEdit favorite={element.favorite} _id={element._id} />
        <Box>
          <AvatarWrapper>
            <Avatar src={userAvatar} alt={'Avatar'} />
          </AvatarWrapper>
          <ContactContent element={element as any} />
        </Box>
      </Item>
      {isOpenModal.edit && (
        <ContactEdit
          element={element as any}
          userAvatar={userAvatar}
          closeModalEdit={closeModalEdit}
        />
      )}
      {isOpenModal.delete && (
        <ContactDelete
          _id={element._id}
          name={element.name}
          closeModalDelete={closeModalDelete}
        />
      )}
    </>
  );
};

export default ContactItem;

const Item = styled.li`
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  max-width: 320px;
  padding: 10px;
  flex-grow: 1;
  flex-basis: 275px;
  font-size: 16px;
  border: 2px solid ${accentColor};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(40, 40, 40, 0.5);

  ${size.tabletMin} {
    flex-basis: 600px;
    max-width: 700px;
    padding-left: 64px;
    padding-right: 40px;
    font-size: 18px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85px;
`;

const Box = styled.div`
  ${size.tabletMin} {
    display: flex;
  }
`;

const AvatarWrapper = styled.div`
  min-width: 85px;
  max-width: 85px;

  ${size.mobileMax} {
    margin: 0 auto 20px;
  }

  ${size.tabletMin} {
    margin-right: 20px;
  }
`;
