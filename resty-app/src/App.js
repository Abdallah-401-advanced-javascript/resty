/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header';
import Main from './components/form/form';
import Footer from './components/footer/footer';
import Results from './components/results/results';
import Routes from './components/routes';
import { Link } from 'react-router-dom';


//class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      count: 0,
      results: [],
      headers:[],
      item:[],
    };
  }

// method to be passed to form
handleForm = (count, results,headers,item) => {
  this.setState({count, results,headers,item});
  // {count: count , results:results}
}

render() {
  return (
    // I will add Header, Main, Footer
    <React.Fragment>
      {/* <link >history</link> */}
      <Header />
      <Routes item={this.state.item}/>

      {/* <Main /> */}
      <Footer />
      <Main handler={this.handleForm} />
      <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
    </React.Fragment>
  );
}
}

export default App;

