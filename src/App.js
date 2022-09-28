import logo from './assets/img/logo.svg';
import './assets/css/App.css';

//Importing Components  
import MyComponent from './components/MyComponent';
import { OtherC } from './components/OtherC';


function grettings(name, age) {
  let resp = (
    <div>
      <h2> I am {name}</h2>
      <h2> and I am {age}</h2>
    </div>
  )
  return resp;
}

function App() {

  let name = "World";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Hello {grettings(name, "una pila")}

        </p>
        <section className="comp">
          <MyComponent />
        </section>
        <section>
          <OtherC />
        </section>
      </header>


    </div>
  );
}

export default App;
