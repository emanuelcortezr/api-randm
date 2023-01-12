import React, { useEffect, useState } from 'react';
import { allCharacters } from '../Functions/Functions';
import Contact from './Contact';
import Navbar from './Navbar';

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    allCharacters(setCharacters);
  }, []);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      const response = characters.filter((character) => {
        const str = character.name.toLowerCase();
        const regex = new RegExp(e.target.value.toLowerCase());
        return regex.test(str);
      });
      setCharacters(response);
    }
    if (e.target.value.length === 0) {
      allCharacters(setCharacters);
    }
    console.log(characters);
  };

  const [stateEmpty, setHeart] = useState(false);
  const favoriteStuffing = () => {
    setHeart(!stateEmpty);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            NOMBRE DEL PERSONAJE
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ej: Rick"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="cards">
          {characters != null
            ? characters.map((character) => (
                <div key={character.id}>
                  <div className="grid">
                    <figure className="effect">
                      <img
                        src={character.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <figcaption>
                        <h2>{character.name}</h2>
                        <p>
                          {character.species}
                          <span className="dash"> • </span>
                          {character.status}
                          <span className="dash"> • </span>
                          {character.gender}
                        </p>
                        <p>
                          Origin<span className="dash"> : </span>
                          {character.origin.name}
                        </p>
                        <p>
                          Now in<span className="dash"> : </span>
                          {character.location.name}
                        </p>
                        {/* <a href="#">View more</a> */}
                        <p className="heart">
                          <a
                            href="#"
                            onClick={favoriteStuffing}
                            className={'empty ' + (stateEmpty ? 'full' : ' ')}
                          >
                            {stateEmpty ? (
                              <ion-icon name="heart"></ion-icon>
                            ) : (
                              <ion-icon name="heart-outline"></ion-icon>
                            )}
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  {/* --------------------------- */}
                </div>
              ))
            : 'no hay personajes'}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Characters;
