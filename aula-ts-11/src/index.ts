import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import gamesService from "./service/games-service";
import { Game } from "./protocols/game-protocol";
import { validateSchema } from "./middleware/validateSchema-middleware";
import { gameSchema } from "./schemas/game-schema";

const app = express();
app.use(json());

app.post("/games", validateSchema(gameSchema), async (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    await gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  const games: Game[] = await gamesService.getGames();
  res.send(games);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));
