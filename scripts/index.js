// Массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Профиль
const popupProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_edit_profile');
const popupProfileCloseBtn = popupProfile.querySelector('.popup__button-closed');
const popupFormEdit = popupProfile.querySelector('.popup__form');
const popupProfileNameInput = popupFormEdit.querySelector('.popup__input_value_name');
const popupProfileProfessionInput = popupFormEdit.querySelector('.popup__input_value_profession');
const popupProfileName = document.querySelector('.profile__name');  
const popupProfession = document.querySelector('.profile__text'); 

// Карточка
const popupCardOpenBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_card');
const popupCardCloseBtn = popupCard.querySelector('.popup__button-closed');
const formCard = popupCard.querySelector('.popup__form');
const popupCardNameInput = formCard.querySelector('.popup__input_value_place');
const popupCardLinkInput = formCard.querySelector('.popup__input_value_link');
const cardsContainer = document.querySelector('.elements__item');
const cardTemplate = document.querySelector('.template').content;

// Картинка
const popupPicture = document.querySelector('.popup_type_picture');
const poppupPictureCloseBtn = popupPicture.querySelector('.popup__button-closed');
const popupPictureCaption = popupPicture.querySelector('.popup__caption');
const popupOpenedPicture = popupPicture.querySelector('.popup__picture');

// Открыть/Закрыть
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
  
function closePopup(popupAny) {
  popupAny.querySelector('.popup__form').reset();
  popupAny.classList.remove('popup_opened');
}
function closeImagePopup(popupAny) {
  popupAny.classList.remove('popup_opened');
}

function createCard({ link, name }) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.element__title');
  cardName.textContent = name;
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;
  const btnLike = cardElement.querySelector('.element__like');
  const deleteCardBtn = cardElement.querySelector('.element__button-delete');

// Лайки 
  btnLike.addEventListener('click', (evt) => {
    btnLike.classList.toggle('element__like_active');
  });

// Удаление карточки
  deleteCardBtn.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

// Просмотр фотографии
  cardImage.addEventListener('click', () => {
    popupOpenedPicture.src = link;
    popupOpenedPicture.alt = name;
    popupPictureCaption.textContent = name;
    openPopup(popupPicture);
  });

  return cardElement;
};

const renderCard = (card) => {
  cardsContainer.prepend( createCard(card) );
};
  
initialCards.reverse().forEach((item) => {
  renderCard(item);
});

// Добавление карточки
formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderCard ({
    name: popupCardNameInput.value,
    link: popupCardLinkInput.value
});
  closePopup(popupCard);
});

// Слушатели
popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
 
  const nameInputValue = popupProfileNameInput.value;
  const jobInputValue = popupProfileProfessionInput.value;
       
  popupProfileName.textContent = nameInputValue;
  popupProfession.textContent = jobInputValue;
    
  closePopup(popupProfile);
});
  
popupProfileOpenBtn.addEventListener('click', () => {
  openPopup(popupProfile); 
});
  
popupProfileCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});
  
popupCardOpenBtn.addEventListener('click', () => {
  openPopup(popupCard);
});
  
popupCardCloseBtn.addEventListener('click', () => {
  closePopup(popupCard);
});
  
poppupPictureCloseBtn.addEventListener('click', () => {
  closeImagePopup(popupPicture);
});