
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TableContents from './components/TableContents/TableContents';
import UserEdit from './components/UserEdit/UserEdit';
import UserDetails from './components/UserDetails/UserDetails';
import Map from './components/Map/Map'

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<TableContents />}></Route>
  <Route path='/:id' element={<UserEdit />}></Route>
  <Route path='/:id/details' element={<UserDetails />}></Route>
</Routes>
<Map />
    </div>
  );
}

export default App;
