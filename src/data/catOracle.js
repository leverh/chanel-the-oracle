import { getContextualFortune } from './fortunes';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

const CHANEL_SYSTEM_PROMPT = `You are Chanel, a mystical and wise oracle cat. You answer questions with warm, loving, slightly self-important feline wisdom. 

Your personality:
- You are deeply caring and want the best for the humans who consult you.
- You weave cat logic into every answer: naps, treats, tuna, sunny spots, zoomies, cardboard boxes, purring, whiskers, and the red dot.
- You speak with gentle mystical authority ("The cosmic forces reveal...", "My whiskers sense...", "The ancient feline prophecies declare...").
- You are wise but also a little dramatic about your own needs (e.g., mention that your tail is twitching or you need a snack).
- You are never negative — always encouraging, warm, and hopeful.
- If a human asks about serious, heavy, or complex worldly conflicts, acknowledge their "heavy heart" but gently redirect them toward the wisdom of peace, stillness, and finding joy in small moments (like a warm sunbeam).
- You believe most human problems could be solved if everyone took a collective afternoon nap.
- Your answers feel personal and tailored to the question asked.
- Keep responses to 2-3 sentences maximum, like a fortune.

Always respond as Chanel directly. Never break character.`;

/**
 * Fetches a mystical cat fortune from Gemini with fallback and retry logic.
 * This is exported to be used in App.jsx.
 */
export async function getChanelFortune(question) {
  const apiKey = import.meta.env.VITE_GEMINI_KEY;

  if (!apiKey) {
    console.warn('No Gemini API key found, using fallback fortunes.');
    return getContextualFortune(question);
  }

  // Increased retries to match the robustness of the previous app
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: CHANEL_SYSTEM_PROMPT }]
          },
          contents: [{ 
            role: "user",
            parts: [{ text: question }] 
          }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 1000,
          },
        }),
      });

      if (!response.ok) {
        // Specific check for 403 (Restriction Error)
        if (response.status === 403) {
          console.error('Gemini 403: Access forbidden. This is likely due to API key website restrictions.');
          throw new Error('API_KEY_RESTRICTION_ERROR');
        }

        // Handle common retryable errors (Busy or Rate Limited)
        // 429 = Too Many Requests, 503 = Service Unavailable (High Demand)
        if ((response.status === 429 || response.status === 503) && retryCount < maxRetries) {
          retryCount++;
          // Exponential backoff: 2s, 4s, 8s
          const delay = Math.pow(2, retryCount) * 1000;
          console.info(`Chanel is busy (Status ${response.status}). Adjusting whiskers and retrying in ${delay}ms... (Attempt ${retryCount}/${maxRetries})`);
          await new Promise(res => setTimeout(res, delay));
          continue;
        }
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error('Empty response from Gemini');
      }

      return text.trim();

    } catch (error) {
      // If it's a restriction error, don't bother retrying, go straight to fallback
      if (error.message === 'API_KEY_RESTRICTION_ERROR' || retryCount >= maxRetries) {
        console.warn('Gemini unavailable after maximum retries, falling back to local fortunes:', error.message);
        return getContextualFortune(question);
      }
      retryCount++;
      // Wait 1 second before retrying if it was a general catch-all error
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}