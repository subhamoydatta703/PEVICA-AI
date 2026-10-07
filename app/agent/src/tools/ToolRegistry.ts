import { z } from "zod";

export interface Tool{
    name: string;
    description: string;
    IMPORTANT?: string;
    parameters: z.ZodSchema;
    execute: (args: any) => Promise<any>;
}

export interface ToolCall {
    name: string;
    params: Record<string, unknown>;
}