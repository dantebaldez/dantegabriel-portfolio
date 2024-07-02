import MainContent from './Components/MainContent'
import Sidebar from './Components/Sidebar'
import { useEffect } from 'react';

import './Styles/components/app.sass'

function App() {
  useEffect(() => {
    document.title = "Dante Gabriel DEV";
  }, []);

  return (
    <div id="portfolio">
      <h1>Dante Gabriel</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}


export default App;