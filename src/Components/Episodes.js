import React, { useEffect, useState } from 'react';
import { allEpisodes } from '../Functions/Functions';
import { allCharacters } from '../Functions/Functions';

import Navbar from './Navbar';
import Contact from './Contact';
import serie from '../assets/serie.png';

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    allEpisodes(setEpisodes);
    allCharacters(setCharacters);
  }, []);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      const response = episodes.filter((episode) => {
        const str = episode.name.toLowerCase();
        const regex = new RegExp(e.target.value.toLowerCase());
        return regex.test(str);
      });

      if (response.length > 0) {
        setEpisodes(response);
      } else {
        setEpisodes(null);
      }
    }
    if (e.target.value.length === 0) {
      allEpisodes(setEpisodes);
    }
  };

  // const toggleFavorite = (episode) => {
  //   let modifiedEpisodes = episodes.map((item) => {
  //     if (episode === item.id) {
  //       return { ...item, heart: item.heart ? !item.heart : true };
  //     } else {
  //       return item;
  //     }
  //   });

  //   setEpisodes(modifiedEpisodes);
  // };

  return (
    <>
      <Navbar />
      {/* {episodes != null
        ? episodes.map((episode) => (
          <div key={episode.id}>
            <a href="#">{episode.name}</a>
          </div>
        ))
        : 'no hay episodios'} */}

      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            NOMBRE DEL EPISODIO
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="cards">
          {episodes != null ? (
            episodes.map((episode, index) => (
              <div key={episode.id}>
                <div className="grid">
                  <figure className="effect">
                    <img
                      src={characters[index].image}
                      className="card-img-top"
                      alt="..."
                    />
                    <figcaption>
                      <h2>{episode.name}</h2>
                      <p>
                        Air date <span className="dash"> : </span>
                        {episode.air_date}
                      </p>
                      <p>
                        Episode<span className="dash"> : </span>
                        {episode.episode}
                      </p>

                      {/* <a href="#">View more</a> */}
                      {/* <p className="heart">
                        <button
                          onClick={() => {
                            toggleFavorite(episode.id);
                          }}
                          className={'empty ' + (episode.heart ? 'full' : ' ')}
                        >
                          {episode.heart ? (
                            <ion-icon name="heart"></ion-icon>
                          ) : (
                            <ion-icon name="heart-outline"></ion-icon>
                          )}
                        </button>
                      </p> */}
                    </figcaption>
                  </figure>
                </div>
                {/* --------------------------- */}
              </div>
            ))
          ) : (
            <div>
              <p style={{ color: 'red', fontSize: '30px' }}>
                No hay episodios con el texto ingresado
              </p>
              <img src={serie} alt="..." style={{ width: '500px' }} />
            </div>
          )}
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Episodes;
