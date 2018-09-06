import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BankName({name}) {
  return (
    <span className="bank-name">{name}</span>
  );
}

function CardNumber({numberObj}) {
  const {cardNumber, securityNumber} = numberObj;
  let firstNumber = cardNumber.substring(0, 4);
  let secondNumber = cardNumber.substring(4, 8);
  let thirdNumber = cardNumber.substring(8, 12);
  let forthNumber = cardNumber.substring(12, 16);
  return (
    <div className="card-number">
      <span className="first-number">{firstNumber}</span>
      <span className="second-number">{secondNumber}</span>
      <span className="third-number">{thirdNumber}</span>
      <span className="forth-number">{forthNumber}</span>
      <span className="security-number">{securityNumber}</span>
    </div>
  );
}

function ExpireDate({dateString}) {
  return (
    <div className="expire-date">
      <div className="expire-date-title">
        <table>
          <tr>
            <td>VALID</td>
          </tr>
          <tr>
            <td>THRU</td>
          </tr>
        </table>
      </div>
      <span className='date'>{dateString}</span>
    </div>
  )
}

function Holder({holderName}) {
  return <span className="holder">{holderName}</span>;
}


function CreditCard({info}) {
  return (
    <div className="credit-card">
      <BankName name={info.bankName}/>
      <CardNumber numberObj={info.number}/>
      <ExpireDate dateString={info.expireDate}/>
      <Holder holderName={info.holderName}/>
    </div>
  );
}

const cardInfo = {
  bankName: 'Big Bank, Inc',
  number: {
    cardNumber: '4270300054783269',
    securityNumber: '1234'
  },
  expireDate: '08/23',
  holderName: 'ZHAO ZHONGWEN'
};

ReactDOM.render(
  <CreditCard info={cardInfo}/>,
  document.getElementById('root')
);
