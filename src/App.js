import './App.css';
import Blogs from './components/Blogs';
import Blog_Input from './components/Blog_Input'

function App() {
  return (
    <div className="App">
      <h1>List of blogs</h1>
      <Blogs />
      <Blog_Input/>
    </div>
  );
}

export default App;
