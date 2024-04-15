import React, { useState, useEffect } from 'react';
// import data from "../recipesData.json"

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                /* 
                ! OK !
                Accès au fichier json OK depuis 'public' 
                */
                // const response = await fetch(process.env.PUBLIC_URL + '/P_API.json');
                const response = await fetch(process.env.PUBLIC_URL + '/recipes.json');
                console.log('PUBLIC_URL:', process.env.PUBLIC_URL + '/recipes.json');

                const data = await response.json();
                setRecipes(data);

                // console.log(data);
                // console.log(setRecipes(data));


                /*
                ! OK !
                Accès au fichier json OK à la racine de 'src' 
                */
                // const uri = '/P_API.json';
                // console.log('URI is:', uri);
                // const res = await fetch(uri);
                // console.log('resp:', res);

                // const dataAlt = await res.json();
                // console.log(dataAlt);
                // setRecipes(dataAlt);
                // console.log(setRecipes(dataAlt));


                /*
                !!! HUGE WARNING !!!!
                ! KO !
                Accès au fichier json KO depuis le dossier 'src/data/' 
                */
                // const url = '../../data/P_API.json';
                // console.log('URL:', url);
                // const chaussette = await fetch(url);
                // console.log('chaussette:', chaussette);

                // const testD = await chaussette.json();
                // console.log(testD);
                // setRecipes(testD);
                // console.log(setRecipes(testD));


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h1>Listes des recettes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;