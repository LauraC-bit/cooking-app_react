import "./Container.scss";
import Main from "../Main/Main.jsx";

function Container() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="h1-style">Tomato Lovers</h1>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default Container;
