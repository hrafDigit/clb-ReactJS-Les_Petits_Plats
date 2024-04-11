import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* --------------------- */
import Header from '../../components/core/shared/header';
import Footer from '../../components/core/shared/footer';
// import Main from './components/main';
import About from '../about/about';
import Contact from '../contact/contact';
import Legal from '../legal/legal';
// import Recipe from './components/recipe';
// import Search from './components/autocomplete';
/* --------------------- */

/* ±±±±±±±±±±±±±±±±±±±±± */
function Router() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                {/* <Route path="/recipe" element={<Recipe />} /> */}
                {/* <Route path="/search" element={<Search />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
                {/* <Route path="*" element={<Error404 />} /> */}
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default Router;
