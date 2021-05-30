import React, {useState, useEffect} from 'react';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';

import Login from './Login/Login';
import Register from './Register/Register';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Loged from './Loged/Loged';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import MessagePopup from './MessagePopup';
import InfoTooltip from './InfoTooltip/InfoTooltip';

import CurrentUserContext from '../contexts/CurrentUserContext';
import SpinnerContext from '../contexts/SpinnerContext';
import api from '../utils/api';


function App() {
  /* States */

  // User info
  const [currentUser, setCurrentUser ] = useState({});

  // Header Menu
  const [visibleHeaderMenu, setVisibleHeaderMenu] = useState(false);
  const [headerMenuBurger, setHeaderMenuBurger] = useState(true);

  // Popups
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isMessagePopup, setIsMessagePopup] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageIcon, setMessageIcon] = useState(null);
  const [resetForms, setResetForms] = useState(false);

  // Cards
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [cardsError, setCardsError] = useState(null);

  // Auth
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authDirty, setAuthDirty] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const authData = {
    email,
    password,
    emailError,
    passwordError,
    authDirty,
    validForm,
    handleChangeEmail,
    handleChangePassword,
    blurHandler,
    handleSubmit
  };
  /* /States */


  /* cards */
  useEffect(()=> {
    api.getInitialCards()
      .then(data => setCards(data))
      .catch(error => setCardsError(`${error} - Something went wrong`));
  }, []);


  function handleCardLike(selectedСardLikes, selectedСardID) {
    const isLiked = selectedСardLikes.some(otherUsers => otherUsers._id === currentUser._id);
    
    api.changeLike(selectedСardID, !isLiked)
      .then(selectedСard => {
        setCards(allCards => allCards.map(card => card._id === selectedСardID ? selectedСard : card));
        setMessageIcon(true);
    })
    .catch(error => handleMessagePopup(`Something went wrong - ${error}`));
    setMessageIcon(false);
  };


  function handleCardDelete(selectedСardID) {
    api.deleteCard(selectedСardID)
      .then(postDeleted => {
        setCards(allCards => allCards.filter(card => card._id !== selectedСardID));
        if(postDeleted) {
          handleMessagePopup('Пост успешно удален');
          setMessageIcon(true);
        }
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setMessageIcon(false);
      });
  };


  function handleAddPlaceSubmit(newPlaceData) {
    setLoading(true);

    api.setNewCard(newPlaceData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setMessageIcon(false);
        setLoading(false);
      });
  };
  /* /cards */


  /* user info */
  useEffect(()=> {
    api.getUserInfo()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(error => {
        setCurrentUser({
          name: error,
          about: 'Something went wrong',
          avatar: 'https://www.wpfixit.com/wp-content/uploads/2019/03/HTTP-error-when-uploading-images-in-WordPress.jpg'
        })
      });
  }, []);


  function handleUpdateAvatar(link) {
    setLoading(true);

    api.setUserAvatar(link)
      .then(newData => {
        setCurrentUser(newData);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setMessageIcon(false);
        setLoading(false);
      });
  };


  function handleUpdateUser({userName, about}) {
    setLoading(true);

    api.setUserInfo(userName, about)
      .then(newData => {
        setCurrentUser(newData);
        setLoading(false);
        closeAllPopups();
      })
      .catch(error => {
        handleMessagePopup(`Something went wrong - ${error}`);
        setMessageIcon(false);
        setLoading(false);
      });
  };
  /* /user info */


  /* popup's */
  const handleEditAvatarClick =()=> {
    setIsEditAvatarPopupOpen(true);
    setResetForms(false);
  };

  const handleEditProfileClick =()=> {
    setIsEditProfilePopupOpen(true);
    setResetForms(false);
  };

  const handleAddPlaceClick =()=> {
    setIsAddPlacePopupOpen(true);
    setResetForms(false);
  };

  const handleMessagePopup =(message)=> {
    setIsMessagePopup(true);
    setMessageText(message);

    const hideMessage =()=> {
      setIsMessagePopup(false);
    }

    setTimeout(hideMessage, 1500);
  }

  const handleCardClick =(name, link)=> {
    setSelectedCard({
      isOpen: true,
      name,
      link
    });
  };

  const closeAllPopups =()=> {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoTooltip(false);

    setSelectedCard({});
    setLoading(false);
    setResetForms(true);
  };
  /* /popup's */


  /* Auth */
  useEffect(()=> {
    if (!email || !password || emailError || passwordError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [email, password, emailError, passwordError])


  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if((e.target.name === 'email' && e.target.value.length < 6)) {
      setEmailError('Email не должен содержать менее 6 символов');
      setAuthDirty(true);
    } else {
      setEmailError('');
    }
  };


  function handleChangePassword(e) {
    setPassword(e.target.value);

    if((e.target.name === 'password' && e.target.value.length < 8)) {
      setPasswordError('Пароль не должен содержать менее 8 символов');
      setAuthDirty(true);
    } else {
      setPasswordError('');
    }
  }

  
  function blurHandler(e) {
    if (!e.target.value && e.target.name === 'email') {
      setEmailError('Поле не может быть пустым');
    } else if (!e.target.value && e.target.name === 'password') {
      setPasswordError('Поле не может быть пустым');
    }
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log('ok!')
  };
  /* /Auth */



  const changeHeaderMenu =()=> {
    if(!visibleHeaderMenu && headerMenuBurger) {
      setVisibleHeaderMenu(true);
      setHeaderMenuBurger(false);
    } else {
      setVisibleHeaderMenu(false);
      setHeaderMenuBurger(true);
    }
  }

  

  return (
    <SpinnerContext.Provider value={loading} >
      <CurrentUserContext.Provider value={currentUser} >
        <div className="body">
          <div className="page">
            {visibleHeaderMenu ? (<HeaderMenu />) : null}

            <Header component={Loged} changeHeaderMenu={changeHeaderMenu} headerMenuBurger={headerMenuBurger}  />
            {/*
            <Signin />
            <Signup />
            <Loged />
            */}


              {/* <Register authData={authData} /> */}
              {/* <Login authData={authData} /> */}


            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick} 
              cards={cards}
              cardsError={cardsError}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              loading={loading}
              resetForms={resetForms} />
            
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              loading={loading}
              resetForms={resetForms} /> 

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              loading={loading}
              resetForms={resetForms} />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups} />

            <MessagePopup
              messageIcon={messageIcon}
              title={messageText}
              isOpen={isMessagePopup} />

            {/* <InfoTooltip
              isOpen={isInfoTooltip}
              done={true}
              onClose={closeAllPopups} /> */}

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </SpinnerContext.Provider>
  );
};

export default App;