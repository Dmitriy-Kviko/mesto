const popup = document.querySelector('.popup'); 
const popupButtonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__button-closed');
const popupNameInput = document.querySelector('.popup__input_value_name');
const popupProfessionInput = document.querySelector('.popup__input_value_profession');
const popupSubmit = document.querySelector('.popup__submit-button'); 
 
const popupProfileName = document.querySelector('.profile__name');  
const popupProfession = document.querySelector('.profile__text'); 

let popupForm = document.querySelector('.popup__form');

//открыть попап
function openPopup() { 
    popup.classList.add('popup_opened'); 
    popupNameInput.value = popupProfileName.textContent; 
    popupProfession.value = popupProfession.textContent; 
};
 
//закрть попап
function closePopup() { 
    popup.classList.remove('popup_opened');
};

function formSubmitHandler (evt) { 
evt.preventDefault();  
popupProfileName.textContent = popupNameInput.value; 
popupProfession.textContent = popupProfessionInput.value; 
closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', closePopup);
popupButtonEdit.addEventListener('click', openPopup);