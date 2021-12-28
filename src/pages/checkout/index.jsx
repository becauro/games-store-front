import React from 'react';
import './checkout.css';

const fullnameRegexp = new RegExp('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3}');
const cpfRegexp = new RegExp('^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$');
const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');
const phoneRegexp = new RegExp('\\d{2}\\s\\d{4,5}\\-\\d{4}$');
const cepRegexp = new RegExp('[0-9]{5}-[0-9]{3}$');
const addressRegxp = new RegExp('[a-zA-Z0-9 ,.]{10}');

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      subtotal: '',
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      method: 'credit-card',
      fulled: false,

    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    this.getDataFromcartReducer();
  }

  handleCheck() {
    const { fullname, email, cpf, phone, cep, address, method } = this.state;
    if (fullnameRegexp.test(fullname) && cpfRegexp.test(cpf) && emailRegexp.test(email)
    && phoneRegexp.test(phone) && cepRegexp.test(cep) && addressRegxp.test(address)
    && method !== '') {
      this.setState({ fulled: true });
    }
  }

  getDataFromcartReducer = () => {
    const subtotal = 'get value from cart reducer'

    this.setState({
      subtotal,
    });
  }

  handle({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { fulled, subtotal, fullname, email, cpf, phone, cep, address } = this.state;

    if (fulled) {
      return < h1> Thank you! </h1>;
    }

    return (
      <div id="checkout-page-div">
        <h1>Checkout</h1>
        <form>
          <fieldset>
            <h2>
              {`Subtotal: R$ ${subtotal}`}
            </h2>
          </fieldset>
          <fieldset>
            <legend><h2>Customer data</h2></legend>
            <input
              name="fullname"
              value={ fullname }
              type="text"
              maxLength="50"
              pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}"
              title="At least 3 characters"
              placeholder="fullname"
              onChange={ this.handle }
            />
            <input
              name="email"
              value={ email }
              type="text"
              pattern="\S+@\S+\.\S+"
              title="Format: nick@something.something"
              placeholder="E-mail"
              maxLength="50"
              onChange={ this.handle }
            />
            <input
              name="cpf"
              value={ cpf }
              type="text"
              pattern="^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$"
              title="Format: 000.000.000-00"
              placeholder="CPF"
              maxLength="14"
              onChange={ this.handle }
            />
            <input
              name="phone"
              value={ phone }
              type="text"
              pattern="(\d{2})\s(\d{4,5})-(\d{4})"
              title="00 0000-0000 or 00 00000-0000"
              placeholder="Phone Number"
              maxLength="14"
              onChange={ this.handle }
            />
            <input
              name="cep"
              value={ cep }
              type="text"
              pattern="[0-9]{5}-[0-9]{3}$"
              title="Format: 00000-000"
              minLength="9"
              maxLength="9"
              placeholder="CEP"
              onChange={ this.handle }
            />
            <input
              name="address"
              value={ address }
              type="text"
              pattern="[a-zA-Z0-9 '-/(/)]{10,}"
              title="At least 10 characters"
              maxLength="50"
              placeholder="Address"
              onChange={ this.handle }
            />
          </fieldset>
          <fieldset>
            <legend><h2>Payment Method</h2></legend>
            <input
              name="method"
              type="radio"
              value="credit-card"
              onChange={ this.handle }
              checked
            />
            Credit Card
            <input name="method" type="radio" value="debit-card" onChange={ this.handle } />
            Debit Card
            <input name="method" type="radio" value="btc" onChange={ this.handle } />
            BTC
          </fieldset>
          <button id="buy-button" type="button" onClick={ this.handleCheck }>BUY</button>
        </form>
      </div>
    );
  }
}
