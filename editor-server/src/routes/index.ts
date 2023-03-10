import express from "express";

import exportData from "./api/exportData";
import uploadData from "./api/uploadData";
import exportLogger from "./api/exportLogger";
import getLogger from "./api/getLogger";
import login from "./api/login";
import logout from "./api/logout";
import checkToken from "./api/checkToken";
import createUser from "./api/createUser";
import getDancerFiberData from "./api/getDancerFiberData";
import getDancerLEDData from "./api/getDancerLEDData";

const router = express.Router();

router.get("/exportData", exportData);
router.post("/uploadData", uploadData);
router.get("/exportLogger.csv", exportLogger);
router.get("/logger", getLogger);
router.post("/login", login);
router.post("/logout", logout);
router.get("/checkToken", checkToken);
router.post("/createUser", createUser);
router.get("/getDancerLEDData", getDancerLEDData);
router.get("/getDancerFiberData", getDancerFiberData);

export default router;
