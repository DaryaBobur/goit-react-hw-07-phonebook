import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Contacts } from './ContactsListStyled';
import { deleteContact } from '../../redux/operations'
import { BsFillTrashFill, BsPersonCircle } from "react-icons/bs";

const ContactsList = ({ contacts }) => {
   const dispatch = useDispatch();
   return (  
      <Contacts>
         {contacts.map(({name, phone, id}) => ( 
            <li key={nanoid()}>
               <p><BsPersonCircle/> {name} : {phone}</p>
               <button type='button' onClick={()=> dispatch(deleteContact(id))}>
                  <BsFillTrashFill/>
               </button>
            </li>
         ))}
      </Contacts>
   )
}

ContactsList.propTypes = {
   removeContact: PropTypes.func,
   contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
   }))
}

export default ContactsList;