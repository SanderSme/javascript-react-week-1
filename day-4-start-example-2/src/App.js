import './App.css';

function App() {

  let isLoggedIn = true;

  let content;

  if(isLoggedIn){
    content = <div>
    <h1>Profile</h1>
    <ul>
      <li>Name: Petter</li>
      <li>Age: 32</li>
      <li>Phone number: 12312324</li>
    </ul>
  </div>
  } else {
    content = <div>
    Login Form
  </div>
  }
  return (
    <div className="App">
      {content}
      <div>{isLoggedIn ? <div>Profile component</div> : <div>Sign in component</div>}</div>
      <div>{isLoggedIn && <div>Profile component</div>}</div>
      <div>{!isLoggedIn && <div>Sign in component</div>}</div>
    </div>
  );
}

export default App;
