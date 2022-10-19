import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from 'redux/filterSlice';
import { getFilter, getContacts, getIsLoading, getError } from "redux/selectors";
import ContactsList from "components/ContactsList/ContactsList";
import { Label } from "./FilterStyled";
import Loader from 'components/Loader/Loader';


const Filter = () => {
  const dispatch = useDispatch();
  const dataFilter = useSelector(getFilter);
  const dataContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  const filterNamesContacts = e => {
    dispatch(filterName(e.target.value))
  };
  
  const getFilteredContacts = () => {
 
    if(!dataFilter) {
      return dataContacts;
    }

    const normalizedFilter = dataFilter.toLocaleLowerCase();

    const filteredContacts = dataContacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter);
    })

    return filteredContacts;
    
  };

  return (
    <>
      <Label>
        Find contacts by name
        <input type="text" 
        value={dataFilter} 
        name="filter" 
        onChange={filterNamesContacts} />
      </Label>

      {dataContacts && <ContactsList contacts={getFilteredContacts()} />}
      {isLoading && !isError && <Loader/>}
    </>
  )
}

Filter.propTypes = {
  onChange: PropTypes.func,
}
  
export default Filter;