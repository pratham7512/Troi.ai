const express=require("express");
const router=express.Router();

const {responseGenerator,geminiResponse}=require("../controllers/response")


router.post("/",responseGenerator);
router.post("/gemini",geminiResponse);
module.exports=router;
