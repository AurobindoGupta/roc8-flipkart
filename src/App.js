import Sidenav from "./SideNav";
import Dash from "./Dash";


function App() {
  return (
    
      <div className="App">
      <nav style={{background:"blue", display:"flex"}}>
      <img src='flipkart.png' height="25"></img>
      <input type="text" placeholder="Search"></input>
      <button >Search</button>
      <ul style={{display:"flex"}}>
        <li className="nav-list">
          <a>Login</a>
        </li>
        <li className="nav-list">
          <a>More</a>
        </li>
        <li className="nav-list">
          <a>
            Cart
          </a>
        </li>
      </ul>
      </nav>
      
        <Sidenav/>
       <Dash/>

    </div>
    
  );
}

export default App;
