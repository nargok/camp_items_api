import express from "express";

type Item = {
  name: string;
  category: string;
  weight?: number;
};

const items: Item[] = [
  { name: "ピコグリルもどき", category: "焚き火台", weight: 400 },
  { name: "ティピーテント", category: "テント", weight: 2200 },
];

const list = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  return res.status(200).send(items);
};

export { list };
