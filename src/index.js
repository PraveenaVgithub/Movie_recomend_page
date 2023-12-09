import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import sdata from './Sdata';
const root = ReactDOM.createRoot(document.getElementById('root'));


// const newarr=sdata.map(function (cvalue) {
//   return(
//     <App imgsc={cvalue.imgsrc} title={cvalue.sname} about={cvalue.abt} link={cvalue.links}/>
    
//   );
// })

root.render(
<>

  <h2 className='navb'>LIST OF BEST HORROR SERIES</h2>

<div className='whole'>

{sdata.map((cvalue)=>{
  return(
    <App imgsc={cvalue.imgsrc} title={cvalue.sname} about={cvalue.abt} link={cvalue.links}/>
  )
})}

 
 
</div>
 
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
