import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>World</h1>
        <img
          src="https://freefrontend.com/assets/img/css-clocks/analog-clock.gif"
          alt=""
        />
        <h1>Clocks</h1>
      </header>
      <main>
        <aside>
          <div className="add-clock-box">
            <button>Add Clock</button>
            <select name="timezone" id="timezone">
              <option>- Select a timezone -</option>
              <option>Africa/Ceuta</option>;
              <option>America/Argentina/Buenos_Aires</option>;
            </select>
          </div>
        </aside>
        <section>
          <div className="single-timezone">
            <span>X</span>
            <h3 className="single-clock">Africa/Ceuta</h3>
            <div>11:14:03 PM</div>
          </div>
          <div className="single-timezone">
            <span>X</span>
            <h3 className="single-clock">America/Argentina/Buenos_Aires</h3>
            <div>09:14:03 PM</div>
          </div>
          <div className="single-timezone">
            <span>X</span>
            <h3 className="single-clock">Asia/Bishkek</h3>
            <div>02:14:03 AM</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
