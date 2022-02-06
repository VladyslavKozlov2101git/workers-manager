import React from 'react';
import { useForm } from 'react-hook-form';
import './CreateUserForm.scss';
import { useDispatch } from 'react-redux';
import { addWorker } from '../../redux/actions';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import close from '../../assets/images/close.svg';

function CreateUserForm({ onClose }) {
  const schema = yup
    .object({
      first_name: yup.string().required(),
      last_name: yup.string().required(),
      position: yup.string().required(),
      fop: yup.boolean().required(),
      date_hire: yup.string().required(),
      salary: yup.number().positive().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => dispatch(addWorker(data));
  const dispatch = useDispatch();

  return (
    <div className="create-worker-container">
      <button className="closeBtn" onClick={() => onClose()}>
        <img src={close} alt="close" />
      </button>
      <h2 className="create-worker-title">Create New Worker</h2>
      <form className="create-worker-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="create-worker--fields">
          <input
            placeholder="First Name"
            {...register('first_name', { required: true, maxLength: 20 })}
          />
          {errors.first_name && <span>This field is required</span>}

          <input
            placeholder="Last Name"
            {...register('last_name', { required: true, maxLength: 20 })}
          />
          {errors.last_name && <span>This field is required</span>}

          <input
            placeholder="Position"
            {...register('position', { required: true, maxLength: 20 })}
          />
          {errors.position && <span>This field is required</span>}

          <input
            type="number"
            placeholder="Salary"
            {...register('salary', { required: true, maxLength: 20 })}
          />
          {errors.taxes && <span>This field is required</span>}

          <input placeholder="Fop" {...register('fop', { required: true, maxLength: 20 })} />
          {errors.fop && <span>{errors.fop.message}</span>}

          <input
            placeholder="Hire date"
            {...register('date_hire', { required: true, maxLength: 20 })}
          />
          {errors.date_hire && <span>This field is required</span>}
        </div>

        <button className="create-worker-submit" formActions type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default CreateUserForm;
