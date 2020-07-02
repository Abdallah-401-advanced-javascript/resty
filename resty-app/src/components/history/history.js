import React from 'react';
import ReactDOM from 'react-dom';
import ReactJson from 'react-json-view';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

// import Home from './home.js';
import App from './../../App.js';
import './history.scss';

class History extends React.Component {
  ShowDelails = e => {  
    e.preventDefault();
    let item = document.getElementById(e.target.name) ;
    if (item.style.display === 'block') {
      console.log('none');
      item.style.display = 'none';
      e.target.value = 'Hide Delails' ;
    } else {
      console.log('show');
      item.style.display = 'block';
      e.target.value = 'Show Delails'; 
    }
  }
  NewSearch = e => {       

  }
  render() {
    return (
      <ul className="list">
        {console.log(this.props.children[0], 'child')}

        {this.props.children[0].map((item, index) => (
          <li key={index}>
            {item.method+' '+item.url}
            <button name={index} onClick ={this.ShowDelails}>Show Delails</button>
            <button name={index} onClick ={this.NewSearch}>
              New Search
              {/* <Redirect
                to={{
                  pathname: '/',
                  state: {url: item.url,method: item.method },
                }}
              /> */}
            </button>
            <div class="textarea" id = {index} >
              Header:{
                <ReactJson src={this.props.children[1][index]} />
              }

              Results:{
                <ReactJson src={this.props.children[2][index]} />
              }
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default History;