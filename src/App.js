import Sidenav from "./SideNav";
import Dash from "./Dash";


function App() {
  return (
    
      <div className="App">
      <nav style={{background:"blue", display:"flex"}}>
      <img src='flipkart.png' height="25" alt=""></img>
      <input type="text" placeholder="Search"></input>
      <button >Search</button>
      <ul style={{display:"flex"}}>
        <li className="nav-list">
          <a href="#">Login</a>
        </li>
        <li className="nav-list">
          <a href="#">More</a>
        </li>
        <li className="nav-list">
          <a href="#">
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
