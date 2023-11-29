import dotenv from 'dotenv';
//Load environment varibales
dotenv.config();

const express = require ("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {Configuration, OpenAIApi} = require("openai");

const config = new Configuration ({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(config);

// setup server

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res)=> {
const {prompt} = req.body;
const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_token: 512,
    temperature: 0,
    prompt: prompt,
});
res.send(completion.data.choices[0].text);

})

const port = 4000;
app.listen(port, ()=> {
    console.log(`Server is connected ${port}`);
})