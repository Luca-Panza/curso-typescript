const game: {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch: string;
} = {
  id: 1,
  platform: {
    id: 1,
    name: "PlayStation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14",
};

const games: {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: Date | string;
}[] = [game];

function play(game: {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch: string;
}): void {
  console.log(game);
}

play(game);
