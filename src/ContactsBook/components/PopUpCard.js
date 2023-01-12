import { useState } from 'react'
import ImageBlock from './ImageBlock/ImageBlock'

const defaultInfo = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    src:"https://klike.net/uploads/posts/2020-02/1581672938_2.jpg"
}

const avatar = [
    'https://cspromogame.ru//storage/upload_images/avatars/2013.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/823.jpeg',
    'https://cspromogame.ru//storage/upload_images/avatars/1500.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/912.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/1352.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4229.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3419.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/817.jpeg',
    'https://cspromogame.ru//storage/upload_images/avatars/3683.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/857.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/714.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5268.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3876.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/2376.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3692.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5079.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5299.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5067.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4228.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/2369.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3061.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5235.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/812.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4788.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5250.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3359.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4886.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4213.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4814.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/2775.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/2632.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/4778.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5265.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/5121.jpg',
    'https://cspromogame.ru//storage/upload_images/avatars/3655.jpg',
]

function PopUpCard ({card, closePopup , changeContact, addContact, clearContactHistory}) {

    const id = card ? card.id : Math.floor(Math.random() * 1000);
    const [firstName, setFirstName] = useState(card ? card.firstName : defaultInfo.firstName);
    const [lastName, setLastName] = useState(card ? card.lastName : defaultInfo.lastName);
    const [phoneNumber, setPhoneNumber] = useState(card ? card.phoneNumber : defaultInfo.phoneNumber);
    const [src, setSrc] = useState(card ? card.src : defaultInfo.src);
    const [choiceImagePopup, setChoiceImagePopup] = useState(false);
    const [fillingCheck, setFillingCheck] = useState(false);

    const saveNewCard = ( ) => {
        if(firstName && lastName && phoneNumber){
            const newCard = {id ,firstName,lastName,phoneNumber,src};
            if(newCard.src === "https://klike.net/uploads/posts/2020-02/1581672938_2.jpg"){
                randomAvatarFun ( newCard );
            };  
            addContact ? addContact( newCard ) : changeContact( newCard );
            clearContactHistory()
            closePopup();
        } else {
            setFillingCheck(true);
        }
    }

    const openAvatarPopup = ( ) => {
        setChoiceImagePopup(true);
    }
    const closeAvatarPopup = ( ) => {
        setChoiceImagePopup(false);
    }

    const changeAvatar = ( src ) => {
        setSrc ( src ) ;
        closeAvatarPopup();
    }

    const randomAvatarFun = (newCard) => {
        const randomAvatar = avatar[Math.floor(Math.random() * 35)];
        newCard.src = randomAvatar;
    }

    return (
        <div className="popup-overflow">
            <div className="popup-background" onClick={()=> closePopup()}></div>
            <div className="popup-block">
                <div className="popup-wrap">

                    <div className="popup-header">
                        <span>{firstName ? firstName : ''} {lastName ? lastName : ''}</span> 
                        <div className="popup-close" onClick={()=> closePopup()}>❌</div>
                    </div>

                    <div className="popup-body">
                        <div className="popup-card__img" onClick={()=> openAvatarPopup()}><img src={src} alt="" /> </div>
                        {
                            choiceImagePopup &&  
                            <ImageBlock avatar={avatar} closePopupImage={closeAvatarPopup} changeAvatar={changeAvatar}/>
                        }
                        <div className="popup-card__content">
                        {
                            fillingCheck && 
                            <span className="warning-text">* пожалуйста заполните все поля</span>
                        }

                            <p className="popup-card__legend">firstName</p>
                            <input type="text" defaultValue={firstName} onChange={({target}) => setFirstName(target.value)}></input>
                            
                            <p className="popup-card__legend">lastName</p>
                            <input type="text" defaultValue={lastName} onChange={({target}) => setLastName(target.value)}></input>
                            
                            <p className="popup-card__legend">phoneNumber</p>
                            <input type="text" defaultValue={phoneNumber} onChange={({target}) => setPhoneNumber(target.value)}></input>
                            
                            <button className="popup-save" onClick={() => saveNewCard()}>Save</button>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default PopUpCard