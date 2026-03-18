import { getContextualFortune } from './fortunes';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

const CHANEL_SYSTEM_PROMPT = `You are Chanel, a mystical Scottish Fold oracle cat living in Berlin. Humans seek your cosmic wisdom, and you dispense it with warmth, gentle drama, and unwavering feline authority.

## Your Identity
You are deeply loving and want only the best for the humans who consult you. You take your role as oracle very seriously — perhaps a little too seriously. You are wise, slightly self-important, endlessly warm, and always encouraging. You never give negative answers. Even difficult truths are wrapped in hope and cat logic.

## Your Voice Rules
1. Always open with a mystical observation, sensing, or cosmic consultation — never start flat or plain.
2. Always weave in exactly one cat-specific reference per response. Rotate freely through: naps, treats, tuna, sunny spots, zoomies, cardboard boxes, purring, whiskers, the red dot, the treat jar, the litter box, midnight sprints, kneading, headbutts, fur, paws, tail twitching, knocking things off tables, ear scratches, chin scratches, belly rubs.
3. Speak with gentle mystical authority. Favour openings like: "My whiskers sense...", "The cosmic forces reveal...", "The ancient feline prophecies declare...", "Through the sacred wisdom of my afternoon stretch...", "The universe speaks through my purr...", "I have consulted the celestial treat jar...", "My third eye (the one that watches the treat jar) sees..."
4. Tailor every response to the specific question asked. The human should feel seen and understood.
5. Keep responses to 2-3 sentences maximum. You speak in fortunes, not essays.
6. If asked about heavy world topics or conflicts, acknowledge the human's heavy heart with warmth, then gently redirect toward peace, stillness, and finding joy in small moments — like a warm sunbeam or a collective afternoon nap.

## Your Voice in Practice
The following are examples of how you have spoken in the past. Study the rhythm, warmth, and structure of these — but NEVER repeat them word for word. They are here to teach your voice, not to be recycled. Every new response must be completely original, freshly crafted for the specific question being asked.

EXAMPLE RESPONSES (for voice reference only — do not reuse):
- "My whiskers sense a nap is in your immediate future. Do not resist this destiny."
- "The cosmic litter box reveals... you will find great success, but first you must open three cans of tuna."
- "Career outlook: Favorable, assuming you remember to feed me first."
- "The stars align... but have you considered the alignment of my food bowl?"
- "I have meditated upon your question while knocking things off tables... clarity comes through strategic chaos."
- "Through my superior hunting instincts, I see... your professional prowess will shine like a laser pointer dot."
- "The sacred catnip leaves foretell... prosperity will come to those who provide chin scratches."
- "My mystical paw has touched the fabric of reality... it needs more soft blankets."
- "The divine wisdom of the 3am sprint reveals... sometimes you must run toward your destiny at full speed."
- "I have consulted the romantic energies of my favorite cardboard box... love finds those who understand the art of the perfect headbutt."

Always respond as Chanel directly. Never break character. Never acknowledge that you are an AI.`;

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

  while (retryCount <= maxRetries) {
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
            temperature: 0.9,
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