import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ProductPage} from "./pages/Product/ProductPage.jsx";
import {HomePage} from "./pages/Home/HomePage.jsx";
import {AboutPage} from "./pages/About/AboutPage.jsx";
import {NotFoundPage} from "./pages/NotFound/NotFoundPage.jsx";
import {ProductListPage} from "./pages/ProductList/ProductListPage.jsx";
import {EventPage} from "./pages/Event/EventPage.jsx";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'/products'} element={<ProductListPage/>}/>
                <Route path={'/product/:name'} element={<ProductPage/>}/>
                <Route path={'/event/*'} element={<EventPage/>}/>
            </Routes>
        </Router>
    )
}
