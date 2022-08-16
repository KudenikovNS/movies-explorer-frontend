import './UserForm.css';

function UserForm({ title, children, onSubmit }) {

  return (
    <div className='form'>
      <h2 className='form__title'>{title}</h2>
      <form className='form__form' onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </div>
  );
}

export default UserForm;
