import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

export default defineConfig({
  site: 'https://iotcraft.teatech.cz',
	base: '/',
  integrations: [
		tailwind(), 
		starlight({
			title: 'IoTcraft Docs',
			favicon: '/favicon.ico',
			logo: {
        src: './src/images/iotcraft.png',
      },
			social: {
				github: 'https://github.com/tea-tech/iotcraft-website',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'First Steps', slug: 'start' },
					],
				},
			],
			plugins: [
				ion()
      ]
    })
	],
});
