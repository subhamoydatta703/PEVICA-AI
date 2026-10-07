import type { Message } from "../core/Message";
import type { Tool } from "../tools/ToolRegistry";
import type { LLMResponse } from "./LLMResponse";

export interface LLMProvider {
    generate(
        messages: Message[],
        tools?: Tool[],
        systemInstruction?: string,
        memorySearchInstruction?: string,
        // callbacks?: Pick<RunCallbacks, "onToken">,
    ): Promise<LLMResponse>;
}