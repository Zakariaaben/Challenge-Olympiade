import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <img src="/lignes.svg" alt="" className="lignes" />
        <div className="navbar">
          <div className="logo">
            <img src="/LOGO.svg" alt="" />
          </div>
          <div className="rightnavbar">
            <p className="link">ETIC</p>
            <p className="link">Entreprises</p>
            <p className="link">Réserver un stand</p>
          </div>
        </div>
        <h1>
          Le Salon de <span>l'Emploi de l'ESI</span>
          <br />
          Prenez rendez-vous avec l'avenir
        </h1>

        <div className="content">
          <div className="card">
            
              <h2 className="header">Entretiens sur place</h2>
              <p className="description">
                Armez vous de <span>votre CV et votre determination</span>
                <br />
                pour décrocher l'oppourtunité de vos rêves
              </p>
              <button>Plus de détails</button>
            
          </div>
          <div className="card">
            
              <h2 className="header">+60 entreprises</h2>
              <p className="description">
                Offrant des stages, des PFE et des offres d'emploi
              </p>
              <button>Voir les entreprises</button>
            
          </div>
          <div className="card">
            
              <h2 className="header">+60 entreprises</h2>
              <p className="description">
                Offrant des stages, des PFE et des offres d'emploi
              </p>
              <button>Voir les entreprises</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
