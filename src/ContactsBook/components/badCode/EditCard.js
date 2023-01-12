import { useState } from 'react'
import ImageBlock from '../ImageBlock/ImageBlock'

function EditCard ({card, closePopup , changeContact, avatar}) {

    
    const [firstName, setFirstName] = useState(card.firstName)
    const [lastName, setLastName] = useState(card.lastName)
    const [phoneNumber, setPhoneNumber] = useState(card.phoneNumber)
    const [pictureSelectionBlock, setPictureSelectionBlock] = useState(false)


    function changeInputValue(attribute, value) {

        switch (attribute) {
            case 'firstName':
                setFirstName(value)
                break;
            
            case 'lastName':
                setLastName(value)
                break;

            case 'phoneNumber':
                setPhoneNumber(value)
                break;
            default: break;
        }
    } 

    function saveNewCard () {
        const newCard = {id: card.id,firstName,lastName,phoneNumber,src: card.src}
        changeContact(newCard)
        closePopup()
    }

    function pictureSelection () {
        setPictureSelectionBlock(true)
    }
    function closePopupImg() {
        setPictureSelectionBlock(false)
    }

    function changeAvatar (src) {
        card.src = src
        closePopup()
    }

    return (
        <div className="popup-overflow">
            <div className="popup-background" onClick={()=> closePopup()}></div>
            <div className="popup-block">
                <div className="popup-wrap">
                    <div className="popup-header"><span>{card.firstName} {card.lastName}</span> <div className="popup-close" onClick={()=> closePopup()}>❌</div></div>
                    <div className="popup-body">
                        <div className="popup-card__img" onClick={()=> pictureSelection()}><img src={card.src} alt="" /> </div>
                        {pictureSelectionBlock &&  <ImageBlock img={avatar} closePopupImg={closePopupImg} changeAvatar={changeAvatar}/>}
                        <div className="popup-card__content">
                            <p className="popup-card__legend">firstName</p>
                            <input type="text" defaultValue={firstName} onChange={({target}) => changeInputValue("firstName",target.value)}></input>
                            <p className="popup-card__legend">lastName</p>
                            <input type="text" defaultValue={lastName} onChange={({target}) => changeInputValue("lastName",target.value)}></input>
                            <p className="popup-card__legend">phoneNumber</p>
                            <input type="text" defaultValue={phoneNumber} onChange={({target}) => changeInputValue("phoneNumber",target.value)}></input>
                            <button className="popup-save" onClick={() => saveNewCard()}>Save</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default EditCard