// import { INVALID_MOVE } from "boardgame.io/core";

// const setup = {cells: Array(9).fill(null) 
// }

// const Alcoo = {
//   name: "alcoo",
//   setup,
//   turn: {
//     moveLimit: 1,
//   },
//   moves: {     
//       clickCell: (G, ctx, id) => {
//           G.cells[id] = ctx.currentPlayer;
//     },
//   },
// }

// export default Alcoo;

import { INVALID_MOVE } from "boardgame.io/core";
import { Stage } from "boardgame.io/core";

const setup = () => {
  return {
    playerInfos: {}, 
    currentPositions: {}, 
    numPlayers: 0
  }
}

// actual main play
const turn = {
  onBegin: (G, ctx) => {
    G.currentPositions = {};
    ctx.events.setActivePlayers({ currentPlayer: 'rolling' });
  },
  stages: {
    rolling: {
      moves: {
        rollDie: (G, ctx) => {
          G.currentPositions[ctx.currentPlayer] += ctx.
          random.Die(6, 1);
          ctx.events.setActivePlayers({ all: 'gaming'});
        }
      }
    },
    gaming: {
      moves:{
        dronk: (G, ctx) => {
          G.playerInfos[ctx.playerID].drinks++;
        }
      }
    }
  }
}

const Alcoo = {
  name: 'alcoo',
  setup,
  phases: {
    join: {
      start: 'true',
      next: 'main',
      turn: {
        onBegin: (G, ctx) => {
          ctx.events.setActivePlayers({ all: 'join' });
        },
        stages: {
          setup: {
            moves: {
              initializePlayer: (G, ctx, name, avatar) => {
                G.playerInfos[ctx.playerID] = {
                  name: 'horleb',
                  avatar: '1',
                  drinks: 0,
                };
              },
              startMatch: (G, ctx) => {
                if (ctx.playerID !== "0") {
                  return INVALID_MOVE;
                }
                
                // Set the number of players
                G.numPlayers = Object.keys(G.playerInfos).length;
                ctx.events.endPhase();
              }
            }
          }
        }
      }
    },
    main: {
      turn,
      next: 'gameover',
    },
    gameover: {
      onBegin: (G, ctx) => {
        ctx.events.setActivePlayers({ all: "gameover" });
      },
      moves: {
        playAgain: (G, ctx) => {
          // we need to keep some of the fields that were entered during the game, in the "setup" phase
          const keepFields = [
            "playerInfos",
            "numPlayers",
          ];

          // create an object like G but with only the fields to keep.
          const GKeep = Object.keys(G)
            .filter((key) => keepFields.indexOf(key) >= 0)
            .reduce((G2, key) => Object.assign(G2, { [key]: G[key] }), {});

          Object.assign(G, setup(ctx, G.setupData), GKeep);

          ctx.events.setPhase("main");
        },
      },
      stages: {
        gameover: {},
      },
    }
  }

  // turn: {
  //   moveLimit: 1,
  // },
  // moves: {
  //   clickCell: (G, ctx, id) => {
  //     if (G.cells[id] !== null) {
  //       return INVALID_MOVE;
  //     }
  //     G.cells[id] = ctx.currentPlayer;
  //   },
  // },

  // endIf: (G, ctx) => {
  //   if (IsVictory(G.cells)) {
  //     return { winner: ctx.currentPlayer };
  //   }
  //   if (IsDraw(G.cells)) {
  //     return { draw: true };
  //   }
  // },
};

export default Alcoo;

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
  return cells.filter((c) => c === null).length === 0;
}
