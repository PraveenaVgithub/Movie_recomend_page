
import './App.css';


function App(props) {
  return (
  <>

  <div className="card" >
   <img className="card-img-top" src={props.imgsc}alt="Card imae cap"/>
   <div className="card-body">
    <h3 className="card-title">{props.title}</h3>
    <p className="card-text">{props.about}</p>
    <a href={props.link} className="btn ">Watch</a>
  </div>
   </div>

   
  </>
   
  );
}

export default App;
