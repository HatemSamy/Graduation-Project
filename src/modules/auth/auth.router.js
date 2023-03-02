import { Router } from "express";
import * as registrationRouter from "./controller/registration.js";
import * as validators from "../../modules/auth/auth.validation.js"
const router = Router()

router.post("/signup",registrationRouter.signup)
router.get("/confirmEmail/:token",registrationRouter.confirmEmail)
router.get("/refreshtoken/:token",registrationRouter.refreshtoken)
router.put("/sendAccessCode",registrationRouter.sendAccessCode)
router.put("/forgetPassword",registrationRouter.forgetPassword)

router.post("/login",registrationRouter.login)





export default router