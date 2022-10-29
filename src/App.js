import './App.css';
import News from './components/News';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <BrowserRouter>
      <div >
      {/* <News/> */}
      <Routes>
        <Route path='/newDetail/:title' element={<NewsDetail/>}/>
        <Route path='/' element={<News/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
