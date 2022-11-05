import { rest } from "msw";

import { adListData, mediaData, trendData } from "../data";

export const handlers = [
  rest.get("/ad-list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(adListData));
  }),
  rest.get("/trend", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trendData));
  }),
  rest.get("/media-channel", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mediaData));
  }),
];
