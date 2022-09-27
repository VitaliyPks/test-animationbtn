import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <p>LOGO</p>
        </div>
        <div className="header__nav">
          <a className='nav__link' href="#">Проекты</a>
          <a className='nav__link' href="#">О компании</a>
          <a className='nav__link' href="#">Контакты</a>
        </div>
        <div className="header__link">
          <div className="links__language">
            <a className='link__language' href="#">RU</a>
            <a className='link__language' href="#">EN</a>
          </div>
          <div className="links__start">
            <a className='link__start' href="#">НАЧАТЬ ПРОЕКТ <img className='img__start' src="1.svg" alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="body__container">
        <div className="body__nav">
          <a className='link__nav' href="#">Главная </a>
          <p className='text__nav'> - Контакты</p>
        </div>
        <div className="body__headers">
          <p className='body__header'>Мы рядом</p>
          <p className='body__text'>Зополните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту <a className='body__link' href="info@site.com">info@site.com</a></p>
        </div>
        <div className="body__form">
          <form action="" className='contact__form'>
            <div className="form__items">
              <div className="form__group1">
                <div className='form__item'>
                  <input required id='nameInput' type="text" className='input__name' />
                  <label htmlFor="nameInput" className='form__label'>Ваше имя <span className='form__span'>*</span></label>
                </div>
                <div className='form__item'>
                  <input required id='emailInput' type="text" className='input__email' />
                  <label htmlFor="emailInput" className='form__label'>Ваш E-Mail <span className='form__span'>*</span></label>
                </div>
              </div>
              <div className="form__group2">
                <div className='form__item'>
                  <input required id='commentInput' type="text" className='input__comment' />
                  <label htmlFor="commentInput" className='form__label'>Комментарий <span className='form__span'>*</span></label>
                </div>
                <div className="form__item">
                  <label htmlFor="checkbox" className='checkbox__label'>
                    <input type="checkbox" id='checkbox' className='checkbox__input' required/>
                    <p className='checkbox__text'>Согласен с <a className='checkbox__link' href="#">Политикой конфиденциальности</a></p>
                  </label>
                </div>
              </div>
            </div>
            <div className="form__buttons">
              <button type='submit' className='form__button'>
                <img className='button__img' src="2.svg" alt="..." />
                <span className='button__span'>Отправить</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
