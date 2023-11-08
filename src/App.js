import './App.css';
function App() {
  return (
    <div className="App">
      <h1>#FORM</h1>

      <div id="formi">
      <div id="out">
        <form>
      <table cellSpacing={10}>
  
          <tr>
          <div className='ar'>
          <input className='ht' type="text" name="name" placeholder='Enter Name'></input>
          </div>
          </tr>

          <tr>

          <div className='ar'>
          <input className='ht' type="text" name="fname" placeholder="Father's Name"></input>
          </div>
          </tr>

          <tr>
          <div className='ar'>
          <input className='ht' type="text" name="mname" placeholder="Mother's Name"></input>
          </div>
          </tr>

          <tr>
          <div className='ar'>
          <input className='ht' type="date" name="dob" placeholder='dob'></input>
          </div>
          </tr>

          <tr>
          <div className='ar'>
          <select className='ht' name="gender">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          </div>
          </tr>

          <tr>
          <input className='hg' type="submit" value="SUBMIT"></input>
          </tr>

      </table>
        </form>

      </div>


      </div>
    </div>
  );
}

export default App;