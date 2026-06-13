import React, { useState } from 'react';
// Подключение файла стилей CSS
import asman from '../assets/asmanB.jpg';

const OfferAgreement = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Пожалуйста, ознакомьтесь с договором и нажмите "Согласен"');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
     
      <div className="success-wrapper">
        <div className="success-box">
          <div className="success-avatar">✓</div>
          <h2>Регистрация успешна!</h2>
          <p>
            Спасибо, {formData.firstName}. Данные приняты. Сейчас вы будете перенаправлены на оплату 800 сом для доступа в Telegram-группу.
          </p>
          <button 
            className="btn-pay"
            onClick={() => alert('Переход на платежную систему (M bank/O!Деньги)...')}
          >
            Перейти к оплате
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="agreement-card">
        
        <div className="header-imege">
          <img src={asman} alt="Асман" />
        </div>
        <div className="header-banner">
          <h1>Агентство недвижимости «Асман»</h1>
          <p>Публичная оферта и регистрация клиента</p>
        </div>

        <div className="content-body">
          <div className="Home-address">
            <h1>ДОГОВОР</h1>
            <h3>ДОГОВОР ПУБЛИЧНОЙ ПРЕДЛОЖЕНИИ</h3>
            <p>г. Бишкек 2026</p>
            
          </div>
           
          {/* Блок договора */}
          <section className="text-box-contract">
           
            <p>
              Настоящий Договор публичной оферты по предоставлению риелторских услуг по аренде недвижимости 
              (далее — «Договор») является официальным предложением агентства «Асман » (далее — «Исполнитель»). 
              Договор считается заключённым с момента нажатия кнопки «Согласен» и означает полное и 
              безоговорочное принятие всех условий.
            </p>

            <div>
              <div className="contract-item-title">1. Предмет договора</div>
              <ul className="contract-list">
                <li>Исполнитель обязуется осуществлять поиск квартир по городу Бишкек через свои источники.</li>
                <li>После оплаты Заказчик подключается к Telegram-группе с базой объектов недвижимости.</li>
                <li>Осмотр объектов и договорённости с арендодателем Заказчик осуществляет самостоятельно.</li>
              </ul>
            </div>

            <div>
              <div className="contract-item-title">2. Условия оплаты</div>
              <ul className="contract-list">
                <li>Оплата производится в сомах Кыргызской Республики.</li>
                <li>Стоимость — 800 сом за 1 месяц пребывания в Telegram-группе.</li>
                <li>Оплата возврату не подлежит.</li>
              </ul>
            </div>

            <div>
              <div className="contract-item-title">3. Обязанности Исполнителя</div>
              <ul className="contract-list">
                <li>Предоставлять актуальные варианты объектов недвижимости.</li>
                <li>Консультировать Заказчика до момента заселения.</li>
              </ul>
            </div>

            <div>
              <div className="contract-item-title">4. Обязанности Заказчика</div>
              <ul className="contract-list">
                <li>Своевременно оплачивать услуги.</li>
                <li>Не передавать информацию третьим лицам.</li>
                <li style={{ color: '#be123c', fontWeight: 'bold' }}>В случае нарушения условий штраф — 10 000 сом.</li>
              </ul>
            </div>

            <div>
              <div className="contract-item-title">5. Прочие положения</div>
              <ul className="contract-list">
                <li>При повторном обращении требуется повторная оплата.</li>
                <li>Споры решаются согласно законодательству КР.</li>
                </ul>
            </div>
          </section>

          <hr className="divider" />

          {/* Форма регистрации */}
          <form onSubmit={handleSubmit} className="client-form">
            <h2>Данные Заказчика для регистрации</h2>
            
            <div className="input-grid">
              <div className="field-group">
                <label>Имя</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              <div className="field-group">
                <label>Фамилия</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
            </div>

            <div className="input-grid">
              <div className="field-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                />
              </div>

              <div className="field-group">
                <label>Номер телефона</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+996 (700) 12-34-56"
                />
              </div>
            </div>

            {/* Чекбокс согласия */}
            <div className="checkbox-block">
              <input
                id="agreement"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="agreement">
                Я подтверждаю, что ознакомлен с условиями Договора публичной оферты агентства «Асман» и принимаю их полностью.
              </label>
            </div>

            {/* Кнопка действия */}
            <button
              type="submit"
              disabled={!agreed}
              className={agreed ? "btn-submit enabled" : "btn-submit disabled"}
            >
              Согласен и зарегистрироваться
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default OfferAgreement;