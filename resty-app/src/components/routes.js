import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
// import Home from './home.js';
import History from './history/history.js';
const Routes = props => {

  console.log('itemsitemsitemsitemsitemsitemsitems');
  let items1 = localStorage.getItem('item');

  // let item2 =items1.split(',');
  let item2=JSON.parse(items1)||[];

  let historyData = localStorage.getItem('historyData');
  let historyHeaders = localStorage.getItem('historyHeaders');
  historyData =JSON.parse(historyData) || [];
  historyHeaders =JSON.parse(historyHeaders) || [];
  let all = [item2,historyHeaders,historyData];
  return (
    <main>
      <Route path="/" exact>
        {/* <Home /> */}
      </Route> 
      <Route path="/history" exact render={() => <History>{all}</History>} />
    </main>
  );
};


export default Routes;