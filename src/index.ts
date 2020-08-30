import express from "express";

const PORT: number = 3000;
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();

router.get("/api/getTest", (req: express.Request, res: express.Response) => {
  res.send(req.query);
});

app.use(router);
app.listen(PORT, () => {
  console.log(`Camp item API listening on port ${PORT}!`);
});
