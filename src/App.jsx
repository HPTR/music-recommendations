import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route
          path="/"
          element={<Marketplace />}
        />
      </Routes>
      </Router>
    </div>
  );
}

export default App;