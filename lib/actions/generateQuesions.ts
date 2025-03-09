"use server";

import { generateObject } from "ai";
import { z } from "zod";
import { createOpenAI } from "@ai-sdk/openai";

export const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});
export async function generateQuestions(inputPrompt: string) {
  // console.log(inputPrompt);
  const model = process.env.GROQ_MODEL;

  if (!model) {
    throw new Error("GROQ_MODEL not defined");
  }

  const {
    object: { questions },
  } = await generateObject({
    model: groq.chat(model) as any,
    schema: z.object({
      questions: z.array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      ),
    }),
    prompt: inputPrompt,
  });
  return questions;
}

export default generateQuestions;
