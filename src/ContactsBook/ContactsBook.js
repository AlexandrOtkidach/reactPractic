import '../App.css'
import {useMemo, useState } from 'react'
import SearchContact from './components/SearchContact'
import ContactList from './components/ContactList';
import PopUpCard from './components/PopUpCard'

const startList = [
    {id:1, firstName:'Alex', lastName: 'Otkidach', phoneNumber:'+12345678',src:"https://cspromogame.ru//storage/upload_images/avatars/824.jpg"},
    {id:2, firstName:'Galy', lastName: 'Otkidach', phoneNumber:'+345678912',src:"https://cspromogame.ru//storage/upload_images/avatars/3935.jpg"},
    {id:3, firstName:'Valery', lastName: 'Bulakh', phoneNumber:'+837410234',src:"https://cspromogame.ru//storage/upload_images/avatars/4488.jpg"},
    {id:4, firstName:'Valeriy', lastName: 'Bulakh', phoneNumber:'+962774412',src:"https://cspromogame.ru//storage/upload_images/avatars/799.jpg"},
    {id:5, firstName:'Alex', lastName: 'Bondar', phoneNumber:'+4235677323',src:"https://cspromogame.ru//storage/upload_images/avatars/3112.jpg"},
];

function ContactsBook () {

    const [contacts, setContact] = useState(startList);
    const [filterValue,setFilterValue] = useState('');
    const [contactEdit, setContactEdit] = useState('');
    const [popUp, setPopUp] = useState(false);
    const [contactsFullName, setContactsFullName] = useState([])

    useMemo(() => {
        const newList = contacts.map(item => {
            return {...item, fullName: item.firstName + " " + item.lastName};
        });
         return setContactsFullName(newList)
    }, [contacts] )

    const deleteContact = ( id ) =>{
        const newList = contacts.filter(item => item.id !== id);
        setContact(newList);
    };
    
    const editContact = ( id ) => {
        const editContactId = contacts.find(item => item.id === id);
        setContactEdit(editContactId);
        setPopUp(true);
    };

    const closePopup = () => {
        setPopUp(false);
    };

    const changeContact = ( newCard ) => {
        const newContactsList = contacts.map(item => item.id !== newCard.id ? item : newCard)
        setContact(newContactsList);
    };

    const searchFilter = ( searchValue ) => {
        setFilterValue(searchValue);
    };

    const addContact = ( card ) => {
        setContact([...contacts,card]);
    };

    const clearContactHistory = () => {
        setContactEdit('')
    }

    return (
        <div className="contact-book">
            <h2 className="contact-title">Список контактов</h2>
            <SearchContact searchFilter={searchFilter}/>
            <ContactList 
                list={contactsFullName} 
                deleteItemContact={deleteContact} 
                editItemContact={editContact} 
                searchValue={filterValue}
            />
            <button className="add-card-btn" onClick={() => {setPopUp(true)}}> Add New Card </button>
            {!popUp ? <></> : contactEdit ? 
                        <PopUpCard 
                            card={contactEdit}
                            closePopup={closePopup} 
                            changeContact={changeContact} 
                            clearContactHistory={clearContactHistory}
                        /> : 
                        <PopUpCard 
                            closePopup={closePopup} 
                            addContact={addContact} 
                            clearContactHistory={clearContactHistory}
                        />
            }
        </div>
    );
};

export default ContactsBook