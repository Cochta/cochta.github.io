import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/work',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

const blogs = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/blogs',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

export const collections = {
	work,
	blogs,
};