import { useState } from 'react'
import ImageBlock from '../ImageBlock/ImageBlock'

function AddCard ({ closePopup , addContact, avatar}) {


    const [newContactCard, setNewContactCard] = useState({id: Math.floor(Math.random() * 1000), src:"https://klike.net/uploads/posts/2020-02/1581672938_2.jpg"})
    const [fillingCheck, setFillingCheck] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
        if(firstName && lastName && phoneNumber){
            let newCard = {...newContactCard, firstName: firstName, lastName:lastName, phoneNumber:phoneNumber}

            if(newContactCard.src === "https://klike.net/uploads/posts/2020-02/1581672938_2.jpg"){
                const randomImg = Math.floor(Math.random() * 35)
                newCard = {...newCard, src: avatar[randomImg]}
            }

            addContact(newCard)
            closePopup()
        } else {
            setFillingCheck(true)
        }
    }
    function pictureSelection () {
        setPictureSelectionBlock(true)
    }
    function closePopupImage() {
        setPictureSelectionBlock(false)
    }

    function changeAvatar (src) {
        setNewContactCard({...newContactCard, src: src})
        closePopupImage()
    }

    return (
        <div className="popup-overflow">
            <div className="popup-background" onClick={()=> closePopup()}></div>
            <div className="popup-block">
                <div className="popup-wrap">
                    <div className="popup-header"><span>New contact</span> <div className="popup-close" onClick={()=> closePopup()}>❌</div></div>
                    <div className="popup-body">
                        <div className="popup-card__img" onClick={()=> pictureSelection()}><img src={newContactCard.src} alt=""/> </div>
                        {pictureSelectionBlock &&  <ImageBlock img={avatar} closePopupImage={closePopupImage} changeAvatar={changeAvatar}/>}
                        <div className="popup-card__content">
                            {fillingCheck && <span className="warning-text">* пожалуйста заполните все поля</span>}
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

export default AddCard