import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { Loader } from 'components';
import { Button, Input, Container } from 'style-guide';
import { useWindowResize } from 'hooks';
import { useForm } from 'react-hook-form';
import { Fragment } from 'react';

const light = (field) => (field.style.border = '1px solid red');

const onSubmit = (data) => console.log(data);

export default () => {
  // define hooks
  const { size, breakpoint } = useWindowResize();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  console.log('bp', breakpoint);

  //define actions
  const find = () => dispatch(actions.users.find());
  const create = (data) => dispatch(actions.users.create(data));
  const remove = (data) => dispatch(actions.users.remove(data));
  const update = (data) => dispatch(actions.users.update(data));

  //define selectors
  const { rows, loaded } = useSelector(selectors.users);
  useEffect(() => {
    const hasError = !!Object.keys(errors).length;
    if (hasError) {
      Object.values(errors).forEach((err) => {
        // light(err.ref);
      });
    }
  }, [Object.keys(errors).length]);

  return (
    <Fragment>
      <div className='pt-8'></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input.Base
          name='email'
          ref={register({ required: true, type: 'email' })}
          className='border-2'
        />
        <Input.Base
          size='sm'
          name='phone'
          ref={register({ required: true, typhe: 'phone' })}
          className='border-2'
        />
        {/* errors will return when field validation fails  */}

        <Button.Primary type='submit' children='Submit' />
      </form>
      <div className='pt-8'></div>
      <div className='flex justify-items-start'>
        <Button.Base children='Base' />
        <Button.Primary children='Base' />
        <Button.Secondary children='Base' />
        <Button.Danger children='Base' />
        {/* <Button.Primary children='Primary' />
        <Button.Secondary children='Secondary' />
        <Button.Danger children='Danger' /> */}
      </div>
      <Container.Base />
      <Container.Fluid />

      {breakpoint?.key === 'xs' ? 'mobile' : 'desktop'}
    </Fragment>
  );
};
