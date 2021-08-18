import React from 'react';
import Footer from './FooterStyles';

const Index = () => {
  const click = (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/akbarramadhannnn/');
  };
  return (
    <Footer>
      <div
        style={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p>
          Build By{' '}
          <a href="/#" onClick={click}>
            Akbar Ramadhan
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default Index;
