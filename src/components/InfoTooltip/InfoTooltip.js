import React from 'react';

import './infoTooltip.css';
import doneIcon from '../../images/infoTooltip-done.svg';
import errorIcon from '../../images/infoTooltip-error.svg';

const InfoTooltip =({isOpen, isDone, onClose})=> {

  return (
    <div className={`pop-up ${isOpen ? 'pop-up_opened' : ''}`}>
        <div className="pop-up__container">
          <img src={isDone ? doneIcon : errorIcon} alt="" 
            style={{
              width: '120px',
              height: '120px',
              margin: '25px auto 40px'}} />
          <h2
            className="pop-up__title"
            style={{
              textAlign: 'center',
              marginBottom: '25px'}} >
            {isDone ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </h2>
          <button
            type="button"
            aria-label="Кнопка закрытия модального окна"
            title="Закрыть"
            className="pop-up__close-btn infoTooltip"
            onClick={onClose} >
          </button>
      </div>
    </div>
  )
}

export default InfoTooltip;