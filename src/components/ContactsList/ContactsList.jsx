// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Contacts } from './ContactsListStyled';
import { deleteContact } from '../../redux/operations'
import { BsFillTrashFill } from "react-icons/bs";
import { FcCellPhone, FcMinus} from "react-icons/fc";
const ContactsList = ({ contacts }) => {
   const dispatch = useDispatch();
   console.log(contacts)
   return (  
      <Contacts>
          {contacts.map(({ name, phone, id }) => ( 
         <li key={nanoid()}>
               <p><FcCellPhone/> {name}<FcMinus/>{phone}</p>
               <button type='button' onClick={()=> dispatch(deleteContact(id))}><BsFillTrashFill/></button>
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