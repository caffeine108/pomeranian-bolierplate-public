import { React, useState } from 'react';
import './style.css';

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    payment: '',
    product: '',
    agreements: false,
    adctional: '',
    account: false,
    regulamin: false,
    newsletter: false,
  });

  const handleChangeValue = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(formData, 'formData');
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="order-frame">
        <h2>ZAMOWIENIE PRODUKTU</h2>
        <div>
          <label htmlFor="product">Wybierz produkt*:</label>
          <div>
            <select
              name="product"
              id="product"
              value={formData.product}
              onChange={handleChangeValue}
            >
              <option placeholder="kurs front-end" value="kurs1">
                kurs front-end
              </option>
              <option value="kurs2">Kurs back-end</option>
              <option value="kurs3">Kurs Full Stack</option>
            </select>
          </div>
        </div>

        {/* Metoda Płatności */}

        <label htmlFor="product">Wybierz formę płarności:</label>

        <div className="inputSelect">
          <div className="inputField">
            <input
              type="radio"
              id="blik"
              name="payment"
              checked={formData.payment === 'blik'}
              value={'blik'}
              onChange={handleChangeValue}
            />
            blik
          </div>

          <div className="inputField">
            <input
              type="radio"
              id="paypal"
              name="payment"
              checked={formData.payment === 'paypal'}
              value={'paypal'}
              onChange={handleChangeValue}
            />
            paypal
          </div>

          <div className="inputField">
            <input
              type="radio"
              id="przelewtradycyjny"
              name="payment"
              checked={formData.payment === 'przelewtradycyjny'}
              value={'przelewtradycyjny'}
              onChange={handleChangeValue}
            />
            przelew tradycyjny
          </div>
        </div>

        {/* Opcje Dodatkowe */}

        <div>
          <label htmlFor="addictional">Opcje dodatkowe do zamowienia</label>
          <div>
            <input
              type="checkbox"
              id="ustawienia"
              name="agreements"
              checked={formData.addictional}
              onChange={handleChangeValue}
            />
            ustawienia środowiska
          </div>
          <div>
            <input
              type="checkbox"
              id="intro"
              name="agreements"
              checked={formData.addictional}
              onChange={handleChangeValue}
            />
            intro do Githuba
          </div>
          <div>
            <input
              type="checkbox"
              id="materialy"
              name="agreements"
              checked={formData.addictional}
              onChange={handleChangeValue}
            />
            matariały dodatkowe
          </div>
        </div>

        {/* Dane do Realizacji */}

        <div>
          <h2>DANE DO REALIZACJI ZAMOWIENIA</h2>
          <div>
            <label htmlFor="name">Imię i nazwisko:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="wpisz swoje imię i nazwisko"
              id="name"
            />
          </div>

          <div>
            <label htmlFor="nickname">Twoj pseudonim:</label>
          </div>
          <div>
            <input
              type="nickname"
              placeholder="Wojtek"
              id="user-nickename"
              name="user-nickname"
            />
          </div>

          <div>
            <label htmlFor="address">Adres do wysyłki:</label>
          </div>
          <div>
            <input
              placeholder="adres, na który mamy wysłać zamówienie"
              type="address"
              id="user-address"
              name="user-address"
            />
          </div>

          <div>
            <label htmlFor="user-email">Adres e-mail*</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="jan.kowalski@gmail.com"
              id="user-email"
              name="user-email"
            />
          </div>

          <div>
            <label htmlFor="user-phone">Numer kontaktowy*</label>
          </div>
          <div>
            <input
              type="phone"
              placeholder="+48 888 888 888"
              id="user-phone"
              name="user-phone"
            />
          </div>

          <div>
            <label htmlFor="content">Dodatkowe uwagi do zamówienia</label>
          </div>
          <div>
            <textarea rows="10" cols="50" id="content" name="content">
              Jeśli masz jakieś uwagi, wpisze je tutaj...
            </textarea>
          </div>
        </div>

        {/* Zakładanie konta */}

        <div>
          <h2>ZAKŁADANIE KONTA</h2>

          <div>
            <label htmlFor="account">
              Chcę założyć konto razem z zamówieniem
            </label>
            <div>
              <input
                type="checkbox"
                id="account"
                name="account"
                checked={formData.account}
                onChange={handleChangeValue}
              />
              zakładam konto
            </div>
          </div>

          <div>
            <label htmlFor="password">Moje hasło</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="56ggW457hh#$"
              id="user-password"
              name="user-password"
            />
          </div>

          <div>
            <label htmlFor="password">Powtórz hasło</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="56ggW457hh#$"
              id="user-password"
              name="user-password"
            />
          </div>
        </div>

        <div>
          <h2>ZGODY I NEWSLETTER</h2>

          <div>
            <label htmlFor="regulamin">
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </label>
            <div>
              <input
                type="checkbox"
                id="regulamin"
                name="regulamin"
                checked={formData.regulamin}
                onChange={handleChangeValue}
                required
              />{' '}
              akceptuję regulamin*
              <div>Pole obowiązkowe!</div>
            </div>
          </div>

          <div>
            <label htmlFor="newsletter">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </label>
            <div>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChangeValue}
              />
              zapisuję się na listę mailingową
            </div>
          </div>
        </div>

        <div>
          <input
            className="btn_submit"
            type="submit"
            name="Send"
            value="SKŁADAM ZAMÓWIENIE"
          />
        </div>
      </div>
    </form>
  );
};

// [...event.target.options].filter(o => o.selected).map(o => o.value)
