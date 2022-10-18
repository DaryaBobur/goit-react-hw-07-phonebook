import ContactForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { ContainerApp, Title, Subtitle } from './AppStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { FcTwoSmartphones } from "react-icons/fc";
const App = () => {
  const dispatch = useDispatch();

const data = useSelector(state=>state.contacts.items) 
console.log(data)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>
      <Title><FcTwoSmartphones/>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>

      <Filter />

      <Toaster
  position="top-right"
  reverseOrder={false}
/>

    </ContainerApp>
  )
};

export default App;