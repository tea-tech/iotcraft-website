// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), starlight(
    {
			title: 'IoTcraft Docs',
			social: {
				github: 'https://github.com/tea-tech/website',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'start' },
					],
				},
			],
    }
  )],
  site: 'https://jirisitera.github.io',
	base: '',
});
