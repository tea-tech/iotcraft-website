import { defineConfig } from 'astro/config';
import { ion } from "starlight-ion-theme";
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  output: "static",
  site: 'https://iotcraft.teatech.cz',
	base: '/',
  vite:{plugins: [tailwindcss()]},
  integrations: [
		starlight({
			title: 'IoTcraft Docs',
			favicon: '/favicon.ico',
			logo: {src: './src/images/iotcraft.png'},
			editLink: {baseUrl: 'https://github.com/tea-tech/iotcraft-website/edit/master/'},
			social: {github: 'https://github.com/tea-tech/iotcraft-website', discord:'https://discord.teatech.cz'},
			sidebar: [{
				label: 'Getting Started',
				items: [
					{label: 'First Steps', slug: 'start'},
				],
			}],
			plugins: [
				ion()
      ]
    })
	],
});
