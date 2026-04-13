import 'dotenv/config';

const PROMPT = "test connection";

console.log("MISTRAL_API_KEY présente ? :", !!process.env.MISTRAL_API_KEY);
console.log("GROQ_API_KEY ? :", !!process.env.GROQ_API_KEY);
console.log("HF_API_KEY ? :", !!process.env.HUGGINGFACE_API_KEY);


/*
const providers = [
  {
    name: 'Mistral',
    url: 'https://api.mistral.ai/v1/chat/completions',
    key: process.env.MISTRAL_API_KEY,
    model: 'mistral-small-latest'
  },
  {
    name: 'Groq',
    url: 'https://api.groq.com/openai/v1/chat/completions',
    key: process.env.GROQ_API_KEY,
    model: 'llama-3.3-70b-versatile'
  }
];

async function callProvider(provider, prompt) {
  const start = Date.now();

  try {
    const response = await fetch(provider.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${provider.key}`
      },
      body: JSON.stringify({
        model: provider.model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const latency = Date.now() - start;

    if (!response.ok) {
      return {
        provider: provider.name,
        latency,
        error: data.error?.message || JSON.stringify(data)
      };
    }

    if (!data.choices || !data.choices[0]?.message?.content) {
      return {
        provider: provider.name,
        latency,
        error: `Réponse inattendue : ${JSON.stringify(data)}`
      };
    }

    return {
      provider: provider.name,
      latency,
      content: data.choices[0].message.content,
      tokens: data.usage?.total_tokens ?? 'N/A'
    };
  } catch (err) {
    return {
      provider: provider.name,
      latency: Date.now() - start,
      error: err.message
    };
  }
}

const results = await Promise.all(
  providers.map(p => callProvider(p, PROMPT))
);

console.log(`\nPrompt : "${PROMPT}"\n`);
console.log('─'.repeat(60));

for (const r of results) {
  console.log(`\n📍 ${r.provider} | ${r.latency}ms`);

  if (r.error) {
    console.log(`❌ Erreur : ${r.error}`);
  } else {
    console.log(`Tokens : ${r.tokens}`);
    console.log(r.content);
  }
}

console.log('\n' + '─'.repeat(60));
console.log('\nRésumé :');
for (const r of results) {
  if (r.error) {
    console.log(` ${r.provider.padEnd(12)} erreur`);
  } else {
    console.log(` ${r.provider.padEnd(12)} ${r.latency}ms`);
  }
}
  */