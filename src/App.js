import DragNDrop from './components/DragNDrop';
import './App.css';

const data = [
  { title: 'Column 1', items: ['Item-1', 'Item-2', 'Item-3'] },
  { title: 'Column 2', items: ['Item-4', 'Item-5'] }
]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <DragNDrop data={data} />
        {/* <div className="drag-n-drop">
          
          <div className="dnd-group">
            <div className="group-title">Group 1</div>

            <div className="dnd-item">
              <div>
                <p>Item 1</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>Item 2</p>
              </div>
            </div>

          </div>

          <div className="dnd-group">
            <div className="group-title">Group 2</div>

            <div className="dnd-item">
              <div>
                <p>Item 1</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>Item 2</p>
              </div>
            </div>

          </div>

        </div> */}
      </header>
    </div>
  );
}

export default App;
