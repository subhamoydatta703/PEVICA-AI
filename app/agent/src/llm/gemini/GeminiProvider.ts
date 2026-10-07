import {GoogleGenAI} from '@google/genai';
import type { LLMProvider } from '../llmProvider';
import type { Message } from '../../core/Message';
import type { Tool } from '../../tools/ToolRegistry';
import type { LLMResponse } from '../LLMResponse';



export class GeminiProvider implements LLMProvider {
    private client: GoogleGenAI;

    constructor(apikey: string) {
        this.client = new GoogleGenAI({ apiKey: apikey });
    }

     async generate(
        messages: Message[],
        tools: Tool[] = [],
        systemInstruction?: string,
        _memorySearchInstruction?: string,
        // callbacks?: Pick<RunCallbacks, "onToken">,
    ): Promise<LLMResponse> {

        const response = await this.client.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: messages,
    config:{
        systemInstruction: systemInstruction,
        
    }
  });
  console.log(response.text);
  return {
    role: "model",
    text: response.text || ""
  }
    
}
}