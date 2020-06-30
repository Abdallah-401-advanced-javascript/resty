///* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from './components/header/header';
import Main from './components/form/form';
import Footer from './components/footer/footer';


//class App
class App extends React.Component {
  render() {
    return (
    // I will add Header, Main, Footer
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

