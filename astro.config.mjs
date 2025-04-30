import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    output: "static",
    site: 'https://iotcraft.teatech.cz',
    base: '/',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        starlight({
            title: 'IoTcraft Docs',
            favicon: '/favicon.ico',
            logo: {src: './src/images/iotcraft.png'},
            editLink: {baseUrl: 'https://github.com/tea-tech/iotcraft-website/edit/master/'},
            social: [
                {icon: 'github', label: 'GitHub', href: 'https://github.com/tea-tech/iotcraft-website'},
                {icon: 'discord', label: 'Discord', href: 'https://discord.teatech.cz'}
            ],
            sidebar: [{
                label: 'Getting Started',
                items: [
                    {label: 'First Steps', slug: 'start'},
                ],
            }]
        })
    ],
});
