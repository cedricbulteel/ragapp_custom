import { z } from "zod";
import { BaseConfigSchema } from "./base";

export const HFConfigSchema = BaseConfigSchema.extend({
  model_provider: z.literal("huggingface"),
  huggingface_model_name: z
    .string()
    .nullable()
    .optional()
    .refine(
      (value) => value && value.trim() !== "",
      "Hugginface model name is required",
    ),
});

export const DEFAULT_HF_CONFIG: z.input<typeof HFConfigSchema> = {
  model_provider: "huggingface",
  model: "meta-llama/Meta-Llama-3.1-8B",
  embedding_model: "BAAI/bge-m3",
  hugginface_model_name: "",
};