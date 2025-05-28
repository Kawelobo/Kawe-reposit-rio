mkdir chatgpt-node
cd chatgpt-node
npm init -y
npm install openai dotenv
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getChatGptResponse() {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Você é um assistente útil.' },
      { role: 'user', content: 'Qual é a capital do Brasil?' },
    ],
  });

  console.log('Resposta do ChatGPT:', response.choices[0].message.content);
}

getChatGptResponse().catch(console.error);
node main.js
