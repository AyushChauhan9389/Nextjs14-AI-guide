import * as z from "zod";

// Update your form schema to include img and remove destination
const formSchema1 = z.object({
  prompt: z.string(),
  img: z.any(), // use z.any() if you don't have a specific type for img
});

// rest of your code...
export { formSchema1 };