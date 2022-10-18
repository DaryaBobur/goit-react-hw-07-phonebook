import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Contacts } from './ContactsListStyled';
import { deleteContact } from '../../redux/operations'
import { BsPhone, BsDot } from "react-icons/bs";
const ContactsList = ({ contacts }) => {
   const dispatch = useDispatch();
   console.log(contacts)
   return (  
      <Contacts>
          {contacts.map(({ name, phone, id }) => ( 
         <li key={nanoid()}>
               <p><BsPhone/> {name}<BsDot/>{phone}</p>
               <button type='button' onClick={()=> dispatch(deleteContact(id))}>Delete</button>
            </li>
            )
            )
         }
      </Contacts>
   )
}
// onClick={()=> dispatch(removeContact(id))}
// ContactsList.propTypes = {
//    removeContact: PropTypes.func,
//    contacts: PropTypes.arrayOf(PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//    }))
// }

export default ContactsList;