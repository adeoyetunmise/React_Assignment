import Product from './Products';
import lists  from './productList.json';
import './Products.css';
import './App.css'
import Users from './Components/Users';

function App() {
  return (
    <div className="App">

      <div className='list'>
        {lists.map((list) =>(<Product {...list}/>))}
      </div>
     <Users/>
    </div>
  );
}

export default App;
