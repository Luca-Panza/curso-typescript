type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: Date | string;
};

const game: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "PlayStation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14",
};

const games: Game[] = [game];

function play(game: Game) {
  console.log(game);
}

play(game);
