const responseGenerator = async (req,res) => {
    try {
        const inputData = req.body;
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer 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 `,
                "HTTP-Referer": `troi.ai`, // Optional, for including your app on openrouter.ai rankings.
                "X-Title": `Troi-ai`, // Optional. Shows in rankings on openrouter.ai.
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "mistralai/mistral-7b-instruct", // Optional (user controls the default),
                "messages":  [inputData]
            })
        });

        if (response.ok) {
            const responseData = await response.json(); // Parsing response JSON
            const tasks=responseData.choices
            console.log(inputData);
            console.log(responseData.choices); // Logging the parsed response data
            res.status(200).send({tasks});
        } else {
            // console.error('Request failed with status:', response.status);
            res.status(500).json({msg:error});
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


//gemini
const run=require("./gemini")
const geminiResponse = async (req, res) => {
    try {
        const body = req.body; // Ensure req.body is parsed properly based on your setup
        const response = await run(`${body.msg}`);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

module.exports={responseGenerator,geminiResponse};
