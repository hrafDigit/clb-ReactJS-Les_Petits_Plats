// import react from 'react';
/* --------------------- */
// import Hero from ???
import Recipe from './recipe';
import Search from './core/functionalities/search/search';
// import Autocomplete from './core/functionalities/search/autocomplete';
/* --------------------- */

/* ±±±±±±±±±±±±±±±±±±±±± */
function Main(props) {
    return (
        <>
            <main>
                <article>
                    <header><h1>Test top</h1></header>
                    <section>
                        {/* <article>
                            <Autocomplete />
                        </article> */}
                        <article>
                            <Search />
                        </article>
                        <article>
                            <Recipe />
                        </article>
                        {/* <article>
                            <h2></h2>
                        </article> */}
                        {/* <article>
                            <h3></h3>
                        </article> */}
                    </section>
                    <h2>Test bottom</h2>
                </article>
            </main>
        </>
    )
}

export default Main;