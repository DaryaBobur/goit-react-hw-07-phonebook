import { useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { ContainerApp, Title, Subtitle } from './AppStyled';
import { FcPhoneAndroid } from "react-icons/fc";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>

      <Title>
        <FcPhoneAndroid/>
        Phonebook
      </Title>

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