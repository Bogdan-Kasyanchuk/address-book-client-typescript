import { ChangeEvent, FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { filterContact } from '../../redux/contacts/contacts-action';
import LabelInput from '../LabelInput/LabelInput';
import InputFilter from '../InputFilter/InputFilter';
import ButtonIconText from '../ButtonIconText/ButtonIconText';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilter);

  const contactFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContact(event.target.value));
  };

  const filterReset = () => {
    dispatch(filterContact(''));
  };

  return (
    <>
      <LabelInput marginBottom="0" marginRight="20px">
        Find by name
        <InputFilter
          autoComplete="off"
          type="text"
          value={filter}
          placeholder="Enter name"
          inputHundler={contactFilter}
        />
      </LabelInput>
      <ButtonIconText
        disabled={!filter}
        type="button"
        buttonHundler={filterReset}
        iconName="cleaner"
      >
        Clear
      </ButtonIconText>
    </>
  );
};

export default Filter;
