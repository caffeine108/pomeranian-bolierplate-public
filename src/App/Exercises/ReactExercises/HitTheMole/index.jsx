import { React, useState } from 'react';
import './styles.css';

import molesvg from '../../../Images/Mole.svg';

const fields = [
  { id: 1, hasClicked: false },

  { id: 2, hasClicked: false },

  { id: 3, hasClicked: false },

  { id: 4, hasClicked: false },

  { id: 5, hasClicked: false },

  { id: 6, hasClicked: false },

  { id: 7, hasClicked: false },

  { id: 8, hasClicked: false },

  { id: 9, hasClicked: false },

  { id: 10, hasClicked: false },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const interval_time = 1000;

export const HitTheMole = () => {
  const [gameFields, setGameFields] = useState(fields);

  const [moleFieldId, setMoleFieldId] = useState(getRandomInt(10));

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [intervalId, setIntervalId] = useState(null);

  const handleStartGame = () => {
    setIsGameStarted(true);

    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomInt(10));
    }, interval_time);

    setIntervalId(intervalId);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);

    clearInterval(intervalId);
  };

  const resetClickField = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => {
          return {
            ...field,

            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleClickField = (clickedField, isMolePresent) => {
    setGameFields(
      gameFields.map((field) => {
        return {
          ...field,

          hasClicked: field.id === clickedField.id,
        };
      })
    );

    resetClickField();
  };

  return (
    <div>
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2>

      {isGameStarted ? (
        <div>
          <div>
            {/* CZAS do końca  */}

            <div>
              <div className="title">Czas do końca</div>

              <div className="content">
                <button disabled={true}>1:35</button>
              </div>
            </div>

            {/* WYNIK */}

            <div>
              <div className="title">Wynik</div>

              <div className="content">
                <button disabled={true}>16</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div>
              <div className="title">Przyciski sterujące</div>

              <div className="content">
                <button onClick={handleStopGame}>Stop</button>
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}

          <div>
            {gameFields.map((field) => {
              const isMolePresent = field.id === moleFieldId;

              const isClickedWithMole =
                isMolePresent && field.hasClicked ? 'green' : '';

              const isClickedWithoutMole =
                !isMolePresent && field.hasClicked ? 'red' : '';

              return (
                <div
                  onClick={() => handleClickField(field, isMolePresent)}
                  className={`field ${isClickedWithMole} ${isClickedWithoutMole}`}
                >
                  {isMolePresent && <img src={molesvg} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          {/* CZAS gry */}

          <div>
            <div className="title">Czas gry</div>

            <div className="content">
              <button>1 minuta</button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}

          <div>
            <div className="title">Liczba kretów</div>

            <div className="content">
              <button>1 kret</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}

          <div>
            <div className="title">Przyciski sterujące</div>

            <div className="content">
              <button onClick={handleStartGame}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
