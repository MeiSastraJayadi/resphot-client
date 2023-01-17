import './App.css';
import Nav from './Nav'
import Right from './Right'
import Upload from './Upload'

function App() {
  return (
    <div className="App">
      <div className='first'>
        <Nav></Nav>
          <Upload></Upload>
      </div>
      <div className='second'>
          <Right></Right> 
      </div>
    </div>
  );
}

export default App;
