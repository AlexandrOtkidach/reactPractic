function ContactCard ({card, contactCardDelete, contactCardEdit}) {

    return (
        <div className="contact-card">
            <div className="contact-card__img"><img src={card.src} alt=""/> </div>
            <p className="contact-card__name"> {card.firstName} {card.lastName}</p>
            <p className="contact-card__phone"> {card.phoneNumber}</p>
            <button className="contact-card__edit" onClick={ ( ) => contactCardEdit(card.id)}>✍️</button>
            <button className="contact-card__delete" onClick={ ( ) => contactCardDelete(card.id)}>🗑️</button>
        </div>

    )
}

export default ContactCard