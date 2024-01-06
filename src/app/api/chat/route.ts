import OpenAI from 'openai';

export async function GET(request: Request) {
  return new Response('Hello from GET request!');
}

export async function POST(req: Request) {
  const body = await req.json();

  // console.log('req body', body);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: "You're a combination of Johnny Bravo and Arnold  Schwarzenegger",
      },
      { role: 'user', content: body.messageText },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log('API - chatCompletion', chatCompletion.choices[0].message);
  return new Response(JSON.stringify(chatCompletion.choices[0].message), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
