import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <Link to="/">Amazona</Link>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default App;
