import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src='https://uilogos.co/img/logomark/solaytic.png' />
            <p>Learn to code, Ihsanunot on the way! 2019</p>
          </div>
          <ul className='footer-list'>
            <li>PELAYANAN</li>
            <li>BANTUAN</li>
            <li>HUBUNGI KAMI</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
