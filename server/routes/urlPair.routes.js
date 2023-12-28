import express from "express";
import UrlPairController from "../controllers/urlPair.controller.js";
const urlPairRouter = express.Router();

urlPairRouter.post("/createUrlPair", UrlPairController.createUrlPair);
urlPairRouter.get("/getUrlPair/:alias", UrlPairController.getUrlPair);
urlPairRouter.put("/updateUrlPair/:alias", UrlPairController.updateUrlPair);
urlPairRouter.delete("/deleteUrlPair/:alias", UrlPairController.deleteUrlPair);

export default urlPairRouter;
