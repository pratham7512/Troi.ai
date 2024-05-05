require("dotenv").config();
const { ConversationChain } = require("langchain/chains");
const { ChatGroq } = require("@langchain/groq");
const {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} = require("@langchain/core/prompts");
const { BufferMemory } = require("langchain/memory");

const chat = new ChatGroq({
    modelName:"llama3-70b-8192",
    apiKey: process.env.GROQ_API_KEY
 });

const chatPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "act as an software devloper interviewer ask short but meaningfull and important questions ask one question at a time, following is the conversation between interviewer and candidate ask next question as interviewer to continue conversation if it is tarting of interview then greet user and ask him to introduce"
  ),
  new MessagesPlaceholder("history"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

const chain = new ConversationChain({
  memory: new BufferMemory({ returnMessages: true, memoryKey: "history" }),
  prompt: chatPrompt,
  llm: chat,
});

async function groqResponse(inputData) {
  const response = await chain.call({ input: inputData });
  return response.response;
}

module.exports = groqResponse;