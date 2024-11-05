// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Product App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Product List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">Add Product</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/add" element={<ProductForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
