/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home_Page from './components/Home';
import Tamil_Page from './components/category/tamil';
import Economics_Page from './components/category/economics';
import History_Page from './components/category/history';
import { useState } from 'react';
import { economics_book, history_book, tamil_Books } from './data/data';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AddEconomic from './components/category/addeconomic';
import AddTamil from './components/category/addTamil';
import AddHistory from './components/category/addHistory';
import ViewHistory from './components/ViewHistory';
import ViewEconomic from './components/ViewEconomic';
import ViewTamil from './components/Viewtamil';
import NoPage from './components/NoPage';
import EditTamil from './components/EditTamil';
import EditEconomic from './components/EditEconomic';
import EditHistory from './components/EditHistory';

function App() {

  const newItem = useHistory();

  const [tamil,setTamil] = useState(tamil_Books);
  const [eco,setEco] = useState(economics_book);
  const [history,setHistory] = useState(history_book);

  return (
    <div className="App">
      
       <Switch>
        
        <Route exact path={"/"}>
          <Home_Page/>
        </Route>

        {/* Tamil Page  */}
        
        <Route path={"/tamil"}>
          <Tamil_Page
            newItem={newItem}
            tamil={tamil} setTamil={setTamil}
          />
        </Route>

        <Route path="/addtamil">
          <AddTamil
          newItem={newItem}
          tamil={tamil} setTamil={setTamil}
          />
        </Route>

        <Route path="/book-tamil/:id">
          <ViewTamil
          newItem={newItem}
          tamil={tamil} setTamil={setTamil}
          />
        </Route>

        <Route path="/edit/tamil/:id">
          <EditTamil
          newItem={newItem}
          tamil={tamil} setTamil={setTamil}
          />
        </Route>

        {/* Economic Page */}

        <Route path={"/economic"}>
          <Economics_Page
            newItem={newItem}
            eco={eco} setEco={setEco}
          />
        </Route>

        <Route path={"/addeconomic"}>
          <AddEconomic
          newItem={newItem}
          eco={eco} setEco={setEco}
          />
        </Route>

        <Route path="/book-economic/:id">
          <ViewEconomic
          newItem={newItem}
          eco={eco} setEco={setEco}
          />
        </Route>

        <Route path="/edit/economic/:id">
          <EditEconomic
          newItem={newItem}
          eco={eco} setEco={setEco}
          />
        </Route>

        {/* History Page  */}

        <Route path={"/history"}>
          <History_Page
            newItem={newItem}
            history={history} setHistory={setHistory}
          />
        </Route>

        <Route path="/addhistory">
          <AddHistory
          newItem={newItem}
          history={history} setHistory={setHistory}
          />
        </Route>

        <Route path="/book-history/:id">
          <ViewHistory
          newItem={newItem}
          history={history} setHistory={setHistory}
          />
        </Route>

        <Route path="/edit/history/:id">
          <EditHistory
          newItem={newItem}
          history={history} setHistory={setHistory}
          />
        </Route>

        {/* Redirect Page  */}

        <Route path="**">
          <NoPage newItem={newItem}/>
        </Route>

       </Switch>

    </div>
  );
}

export default App;
