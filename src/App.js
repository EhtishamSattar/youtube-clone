import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Video from './Components/Video';

function App() {
  return (
   <>
   <Header/>
   <div className="appPage">
    <Sidebar/>
    <Video/>

   </div>
   </>
  );
}

export default App;
