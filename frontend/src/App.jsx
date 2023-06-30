import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default App;
