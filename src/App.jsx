import './App.scss';
import RecommendationsGallery from './containers/RecommendationsGallery/RecommendationsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/sass/reset.scss"

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<RecommendationsGallery />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;