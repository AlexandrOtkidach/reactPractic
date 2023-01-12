import ContactCard from './ContactCard'

function ContactList ({list, deleteItemContact, editItemContact, searchValue}) {

    const contactCardDelete = ( id ) => {
        deleteItemContact( id )
    }

    const contactCardEdit = ( id ) => {
        editItemContact(id)
    }

    const filterByFullName = ( list ) => {
        const newList = list.filter(item => item.fullName.includes(searchValue))
        return newList
    } 

    return (
        <div className="contact-block">
            {filterByFullName(list).map((contactCard) => <ContactCard key={contactCard.id} card={contactCard} contactCardDelete={contactCardDelete} contactCardEdit={contactCardEdit}/>)}            
        </div>
    )
}

export default ContactList