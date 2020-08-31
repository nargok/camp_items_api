import express from "express";
import { list } from "./controller/items";

const PORT: number = 4000;
const app: express.Express = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();

router.get("/api/getTest", (req: express.Request, res: express.Response) => {
  res.send(req.query);
});
router.get("/api/v1/items", list);

app.use(router);
app.listen(PORT, () => {
  console.log(`Camp item API listening on port ${PORT}!`);
});
