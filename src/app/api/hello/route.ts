function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

async function* makeIterator() {
  yield encoder.encode('<p>One</p>');
  await sleep(1000);
  yield encoder.encode('<p>Two</p>');
  await sleep(1000);
  yield encoder.encode('<p>Three</p>');
}

// New function to consume and log the stream
async function logStream(stream: ReadableStream) {
  const reader = stream.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    console.log(new TextDecoder().decode(value));
  }
}

export async function GET() {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  // Consume and log the stream instead of returning it as a response
  await logStream(stream);

  // Return a response indicating that logging is done
  return new Response('Stream logged to console');
}
