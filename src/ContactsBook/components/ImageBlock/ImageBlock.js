function ImageBlock({avatar, closePopupImage, changeAvatar}) {

    return (
        <div className="popup-img">
            <div className="popup-img-wrap">
            <div className="popup-close-img" onClick={() => closePopupImage()}>❌</div>
                <div className="popup-body__img">
                    {avatar.map(picture => <img src={picture} alt="" key={picture} onClick={() => changeAvatar(picture)}/>)}
                </div>
            </div>
        </div>
    )   
}

export default ImageBlock