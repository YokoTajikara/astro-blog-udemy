import { z, defineCollection } from "astro:content";

const postCollecton = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.string(),
		description: z.string(),
		aythor: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collection = {
	posts: postCollecton,
};