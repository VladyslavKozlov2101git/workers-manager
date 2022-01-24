import React from 'react';
import { useForm } from 'react-hook-form';
import './CreateUserForm.scss';
import { useDispatch } from 'react-redux';
import { addWorker } from '../../redux/actions';

function CreateUserForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(addWorker(data));
  const dispatch = useDispatch();

  return (
    <div className="create-worker-container">
      <h2 className="create-worker-title">Create New Worker</h2>
      <form className="create-worker-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          {...register('first_name', { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Last Name"
          {...register('last_name', { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Position"
          {...register('position', { required: true, maxLength: 20 })}
        />
        <input placeholder="Salary" {...register('salary', { required: true, maxLength: 20 })} />
        <input placeholder="Taxes" {...register('taxes', { required: true, maxLength: 20 })} />
        <input placeholder="Fop" {...register('fop', { required: true, maxLength: 20 })} />
        <input
          placeholder="Hire date"
          {...register('date_hire', { required: true, maxLength: 20 })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateUserForm;
