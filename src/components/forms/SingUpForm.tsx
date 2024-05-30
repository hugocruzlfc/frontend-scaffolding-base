import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type TSignUpSchema } from '@/libs/forms.validation';

export interface SingUpFormProps {
  onSubmit: (data: TSignUpSchema) => void;
}

export const SingUpForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const handleOnSubmit = (data: TSignUpSchema) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="flex flex-row justify-center gap-1 mt-5"
    >
      <div>
        <input
          className="border border-gray-300 rounded-md p-2 h-10 ring-1"
          type="text"
          placeholder="Username"
          {...register('username')}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white rounded-md p-2 h-10 hover:bg-blue-600"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
