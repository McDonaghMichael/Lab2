import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <Router>
            <div>
                <NavigationBar />
                <Routes>
                    <Route path="/home" element={<Content />} />
                    <Route path="/read" element={<h1>Read Component</h1>} />
                    <Route path="/create" element={<h1>Create Component</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
