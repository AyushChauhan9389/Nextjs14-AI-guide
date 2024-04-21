import { z } from 'zod';

export const formSchema = z.object({
  prompt: z.string(),
  destination: z.string(), // Add this line
});