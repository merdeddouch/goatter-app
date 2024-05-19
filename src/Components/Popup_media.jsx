import {React,useContext} from 'react';
import { popupContext } from '../Context/popup'


const Popup_media = () => {
const { popupOpen, setPopupOpen, popupUrl, setPopupUrl } = useContext(popupContext);

  return (
    <div>
      <span>&times;</span>
      <img src={popupUrl} alt="Popup Media" />
    </div>
  );
}

export default Popup_media;
