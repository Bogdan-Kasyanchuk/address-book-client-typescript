import { ChangeEvent, FC } from 'react';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { filterContact } from '../../redux/contacts/contacts-action';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import LabelInput from '../LabelInput/LabelInput';
import Button from '../Button/Button';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilter);

  const contactFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContact(e.target.value));
  };

  const filterReset = () => {
    dispatch(filterContact(''));
  };

  return (
    <>
      <LabelInput marginBottom="0" marginRight="20px">
        Find by name
        <input
          type="text"
          value={filter}
          placeholder="Enter name"
          onChange={contactFilter}
        />
      </LabelInput>
      <Button
        icon
        buttonHundler={filterReset}
        iconName="cleaner"
        disabled={!filter}
        ariaLabel="clear"
      />
    </>
  );
};

export default Filter;
