import React, { useEffect, useState } from 'react';
import { allEpisodes } from '../Functions/Functions';

const Episodes = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => allEpisodes(setEpisodes), []);

  const [stateEmpty, setHeart] = useState(false);
  const favoriteStuffing = () => {
    setHeart(!stateEmpty);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            NOMBRE DEL PERSONAJE
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ej: Beth Smith"
            name="name"
          />
        </div>
        {episodes != null
          ? episodes.map((episode) => (
              <div key={episode.id}>
                <a href="#">{episode.name}</a>
              </div>
            ))
          : 'no hay episodios'}
      </div>
    </>
  );
};

export default Episodes;
