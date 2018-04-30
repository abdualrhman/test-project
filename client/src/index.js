import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
fetch("/categories", {
  method : 'get'
})
.then(function(response){
  return response.json()
})
.then(function(data){
console.log(data)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
