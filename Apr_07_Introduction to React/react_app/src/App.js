import "./App.css";

function App() {
  const navbar_links = ["Services", "Products", "About"];
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='title-logo'>
          <img
            src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png'
            alt='title-logo'
          ></img>
        </div>
        <div className='nav-links'>
          {navbar_links.map((l) => {
            return <Link link={l} />;
          })}
        </div>
        <div>
          <button className='btn'>Contact</button>
        </div>
      </div>
      <div className='static-card'>
        <h1>Mobile Operating System</h1>
        <ul>
          <li>Android</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </ul>
        <h1>Mobile Manufacturers</h1>
        <ul>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>
        </ul>
      </div>
    </div>
  );
}

function Link(obj) {
  return (
    <a href='#' className='para-padding'>
      {obj.link}
    </a>
  );
}

export default App;
