import React, { useEffect, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import usePostPhoneNumber from '../../../hooks/usePostPhoneNumber';
import { Button, TextField } from '..';

interface PhoneNumberFormProps {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const contactSchema = yup.object().shape({
  contact: yup.string().matches(/^01\d-?(\d{3,4})-?(\d{4})$/),
});

function PhoneNumberForm(props: PhoneNumberFormProps) {
  const { phoneNumber, setPhoneNumber } = props;

  const inputValue = useRef<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: 'onChange',
  });

  const { isSuccess, mutate } = usePostPhoneNumber();

  useEffect(() => {
    if (isSuccess) setPhoneNumber(inputValue.current);
  }, [isSuccess]);

  const handleSubmitContact = ({ contact }: { contact: string }) => {
    mutate(contact);
  };

  const { onChange } = register('contact');

  return (
    <form style={{ display: 'flex', gap: '6px' }} onSubmit={handleSubmit(handleSubmitContact)}>
      <TextField
        placeholder="핸드폰 번호"
        {...register('contact')}
        error={errors.contact}
        onChange={(e) => {
          inputValue.current = e.target.value;
          onChange(e);
        }}
      />
      <Button size="lg" width="80px" color={isValid ? 'primary' : 'disable'}>
        {phoneNumber.length === 0 ? '전송' : '재전송'}
      </Button>
    </form>
  );
}

export default PhoneNumberForm;
