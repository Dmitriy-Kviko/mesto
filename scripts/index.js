// Профиль
const popup = document.querySelector('.popup'); 
const popupButtonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__button-closed');
const popupFormEdit = document.querySelector('.popup__form');
const popupNameInput = document.querySelector('.popup__input_value_name');
const popupProfessionInput = document.querySelector('.popup__input_value_profession');
const popupSubmit = document.querySelector('.popup__submit-button'); 
const popupProfileName = document.querySelector('.profile__name');  
const popupProfession = document.querySelector('.profile__text'); 
const popupProfile = document.querySelector('.popup_edit_profile');

// Карточка
const popupCard = document.querySelector('.popup_type_card');
const openPopupCardBtn = document.querySelector('.profile__add-button');
const closePopupCardBtn = popupCard.querySelector('.popup__button-closed');
const formElementCard = popupCard.querySelector('.popup__form');
const cardNameInput = formElementCard.querySelector('.popup__input_value_place');
const cardLinkInput = formElementCard.querySelector('.popup__input_value_link');
const cardContainer = document.querySelector('.elements__item');

// Картинка
const popupPicture = document.querySelector('.popup_type_picture');
const closePictureBtn = popupPicture.querySelector('.popup__button-closed');
const pictureCaption = popupPicture.querySelector('.popup__caption');
const pictureOpened = popupPicture.querySelector('.popup__picture');

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

// Открыть/Закрыть
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
  
function closePopup(popupAny) {
  // popupAny.querySelector('.popup__form').reset(); //Переделать очищение формы
  popupAny.classList.remove('popup_opened');
}

function createCard({ link, name }) {
  const cardTemplate = document.querySelector('.template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.element__title');
  cardName.textContent = name;
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;
  const buttonLike = cardElement.querySelector('.element__like');
  const deleteCardBtn = cardElement.querySelector('.element__button-delete');

// Лайки 
buttonLike.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__like_active');
});

// Удаление карточки
deleteCardBtn.addEventListener('click', (evt) => {
  evt.target.closest('.element').remove();
});

// Просмотр фотографии
cardImage.addEventListener('click', () => {
  pictureOpened.src = link;
  pictureOpened.alt = name;
  pictureCaption.textContent = name;
  openPopup(popupPicture);
});

return cardElement;
}

const renderCard = (card) => {
  cardContainer.append( createCard(card) );
};
  
initialCards.forEach((item) => {
  renderCard(item);
});

// Добавление карточки
formElementCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = createCard ({
    name: cardNameInput.value,
    link: cardLinkInput.value
});
cardContainer.prepend(newCard);
closePopup(popupCard);
});

// Слушатели
popupFormEdit.addEventListener('submit', (evt) => {
  evt.preventDefault(); 
 
  const nameInputValue = popupNameInput.value;
  const jobInputValue = popupProfessionInput.value;
       
  popupProfileName.textContent = nameInputValue;
  popupProfession.textContent = jobInputValue;
    
closePopup(popupProfile);
});
  
popupButtonEdit.addEventListener('click', () => {
  openPopup(popupProfile); 
});
  
popupClose.addEventListener('click', () => {
  closePopup(popupProfile);
});
  
openPopupCardBtn.addEventListener('click', () => {
  openPopup(popupCard);
});
  
closePopupCardBtn.addEventListener('click', () => {
  closePopup(popupCard);
});
  
closePictureBtn.addEventListener('click', () => {
  closePopup(popupPicture);
});