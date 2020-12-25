import { INVALID_MOVE } from "boardgame.io/core";
import { Stage } from "boardgame.io/core";

const setup = () => {
  return {
    playerInfos: {}, 
    currentPositions: {},
    diceValue: 0, 
    numPlayers: 0
  }
}

// actual main play
const turn = {
  onBegin: (G, ctx) => {
    G.currentPositions = {};
    ctx.events.setStage('rolling');
  },
  moveLimit: 1,
  stages: {
    rolling: {
      moves: {
        rollDie: (G, ctx) => {
          console.log(G.diceValue);
          G.diceValue = Math.floor((Math.random() * 6) + 1);
          console.log(G.diceValue);
          G.currentPositions[ctx.currentPlayer] += G.diceValue;
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
      start: true,
      next: 'main',
      onBegin: (G, ctx) => {
        ctx.events.setActivePlayers({ all: 'setup' });
      },
      turn: {
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
                // if (ctx.playerID !== "0") {
                //   return INVALID_MOVE;
                // }
                
                // Set the number of players
                G.numPlayers = Object.keys(G.playerInfos).length;
                console.log("match started!");
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
};

export default Alcoo;