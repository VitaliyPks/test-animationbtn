import { useState } from 'react';
import './App.scss';

function App() {
  const [submit, setSubmit] = useState(false)
  const [burger, setBurger] = useState(false)

  function handeBurger(){
    setBurger(prev => !prev)
    document.body.classList.toggle('lock')
  }

  function handlerSubmit(e) {
    e.preventDefault()
    setSubmit(true)
    document.querySelector('.contact__form').reset()

    setTimeout(() => {
      setSubmit(false)
    }, 3000)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <p>LOGO</p>
        </div>
        <div className={burger ? 'navigate active' : 'navigate'}>
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
        <div className={burger ? 'burger__menu active' : 'burger__menu'} onClick={handeBurger}>
          <span></span>
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
          <form action="" className='contact__form' onSubmit={handlerSubmit}>
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
                    <input type="checkbox" id='checkbox' className='checkbox__input' required />
                    <p className='checkbox__text'>Согласен с <a className='checkbox__link' href="#">Политикой конфиденциальности</a></p>
                  </label>
                </div>
              </div>
            </div>
            <div className="form__buttons">
              <button type='submit' className={submit ? 'form__button send' : 'form__button'}>
                <img className={submit ? 'button__img hide' : 'button__img'} src="2.svg" alt="..." />
                <span className={submit ? 'button__span-first hide' : 'button__span-first'}>Отправить</span>
                <span className={submit ? 'button__span-second show' : 'button__span-second'}>Ваше сообщение отправленно!</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__logo">
              <p>LOGO</p>
            </div>
            <div className="footer__column">
              <div className="content__column">
                <h4 className='column__header'>Услуги</h4>
                <a href="#" className='column__link'>Support and development</a>
                <a href="#" className='column__link'>UI/UX and product desing</a>
                <a href="#" className='column__link'>Progressive Web Applications (PWA)</a>
              </div>
              <div className="content__column">
                <h4 className='column__header'>Компания</h4>
                <a href="#" className='column__link'>О компании</a>
                <a href="#" className='column__link'>Проекты</a>
                <a href="#" className='column__link'>Контакты</a>
              </div>
              <div className="content__column">
                <h4 className='column__header'>Контакты</h4>
                <a href="#" className='column__link'>Скачать презентацию <img src='3.svg' /></a>
                <p className='column__text'>+7(499)999-99-99</p>
                <a href="#" className='column__link'>info@site.com</a>
              </div>
            </div>
          </div>
          <div className="footer__link">
            <a href="#" className='column__link'><img src="4.svg" alt="" /></a>
            <a href="#" className='column__link'><img src="5.svg" alt="" /></a>
          </div>
          <div className="footer__corp">
            <small><a href="#" className='column__link'>Политика конфиденциальности</a></small>
            <small>© Company 2022. All rughts reserved.</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
