import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Form } from './ContactsFormStyled';
import { addContact} from 'redux/operations';
import { BsPersonPlusFill, BsPhone } from "react-icons/bs";

const ContactForm = () =>  {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const userInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch(name) {
      case 'name':
      setName(value);       
      break;

      case 'number':
      setPhone(value);
      break;

      default:
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor='htmlFor={userInputId}'><BsPersonPlusFill/>Name
        <input 
            type="text"
            name="name"
            id={userInputId}
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        /> 
      </label>

      <label htmlFor="{userInputId}"><BsPhone/>Number
        <input
            type="tel"
            name="number"
            id={userInputId}
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
      </label>

      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ContactForm;