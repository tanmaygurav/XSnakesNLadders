import React, { useState } from 'react';
import styles from './App.module.css';
import { SNAKES, LADDERS, getBoardCells } from './constants';

const boardCells = getBoardCells();

export default function App() {
  const [positions, setPositions] = useState({ P1: 1, P2: 1 });
  const [turn, setTurn] = useState('P1');
  const [diceValue, setDiceValue] = useState(null);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    if (winner) return;

    const rolled = Math.floor(Math.random() * 6) + 1;
    setDiceValue(rolled);

    const currentPos = positions[turn];
    const nextPos = currentPos + rolled;

    if (nextPos === 100) {
      setPositions((prev) => ({ ...prev, [turn]: 100 }));
      setWinner(turn);
      return;
    }

    let finalPos = currentPos;
    if (nextPos < 100) {
      finalPos = nextPos;
      // Check snake or ladder
      if (SNAKES[finalPos]) {
        finalPos = SNAKES[finalPos];
      } else if (LADDERS[finalPos]) {
        finalPos = LADDERS[finalPos];
      }
    }

    setPositions((prev) => ({ ...prev, [turn]: finalPos }));

    if (finalPos === 100) {
      setWinner(turn);
    } else {
      setTurn((prev) => (prev === 'P1' ? 'P2' : 'P1'));
    }
  };

  const resetGame = () => {
    setPositions({ P1: 1, P2: 1 });
    setTurn('P1');
    setDiceValue(null);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.playerInfo}>
          <div className={`${styles.playerTag} ${turn === 'P1' && !winner ? styles.playerTagActive : ''}`}>
            <span className={styles.tokenDotP1} />
            <span>P1</span>
          </div>
          <div className={`${styles.playerTag} ${turn === 'P2' && !winner ? styles.playerTagActive : ''}`}>
            <span className={styles.tokenDotP2} />
            <span>P2</span>
          </div>
        </div>

        <h1 className={styles.title}>Snake &amp; Ladders</h1>

        <div className={styles.turnIndicator}>
          <span>Turn:</span>
          <span>{winner ? 'Game Over' : turn}</span>
        </div>
      </header>

      {winner && (
        <div className={styles.winnerBanner}>
          🎉 {winner} Wins!
        </div>
      )}

      <div className={styles.boardContainer}>
        <div className={styles.boardGrid}>
          {boardCells.map((cellNum) => {
            const hasP1 = positions.P1 === cellNum;
            const hasP2 = positions.P2 === cellNum;
            const isSnakeHead = Boolean(SNAKES[cellNum]);
            const isLadderBottom = Boolean(LADDERS[cellNum]);

            return (
              <div
                key={cellNum}
                className={`${styles.cell} ${
                  cellNum % 2 === 0 ? styles.cellAlternate : ''
                } ${isSnakeHead ? styles.snakeCell : ''} ${
                  isLadderBottom ? styles.ladderCell : ''
                }`}
              >
                <span className={styles.cellLabel}>{cellNum}</span>
                {isSnakeHead && (
                  <span className={`${styles.cellIndicator} ${styles.snakeIndicator}`}>
                    🐍➔{SNAKES[cellNum]}
                  </span>
                )}
                {isLadderBottom && (
                  <span className={`${styles.cellIndicator} ${styles.ladderIndicator}`}>
                    🪜➔{LADDERS[cellNum]}
                  </span>
                )}
                <div className={styles.tokensOnCell}>
                  {hasP1 && <span className={styles.tokenP1} title="Player 1" />}
                  {hasP2 && <span className={styles.tokenP2} title="Player 2" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.rollButton}
          onClick={rollDice}
          disabled={Boolean(winner)}
        >
          Roll Dice
        </button>
        <div className={styles.diceDisplay}>
          {diceValue !== null ? diceValue : '-'}
        </div>
        <button className={styles.resetButton} onClick={resetGame}>
          Reset
        </button>
      </div>

      <p className={styles.description}>
        Exact 100 is required to win. Land on a ladder to climb up, a snake to slide down.
      </p>
    </div>
  );
}

