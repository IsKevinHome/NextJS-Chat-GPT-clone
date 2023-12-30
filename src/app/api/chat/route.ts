import OpenAI from 'openai';

export async function GET(request: Request) {
  return new Response('Hello from GET request!');
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log('req body', body);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const stream = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'you are a no nonsense expert' },
      { role: 'user', content: body.messageText },
    ],
    model: 'gpt-3.5-turbo',
    stream: true,
  });

  let accumulatedContent = '';

  for await (const chunk of stream) {
    // process.stdout.write(chunk.choices[0]?.delta?.content || '');
    const content = chunk.choices[0]?.delta?.content || '';
    console.log(content); // Log the content of each chunk
    process.stdout.write(content);
    accumulatedContent += content;
  }

  console.log(accumulatedContent)
  return new Response(JSON.stringify({ hello: 'world' }));
}
