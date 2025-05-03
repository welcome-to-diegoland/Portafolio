/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}" // Asegúrate de que las rutas de tus archivos sean correctas
	],
	safelist: [
	  "text-red-500",
	  "text-blue-500",
	  "text-green-500",
	  "text-yellow-500",
	  "text-neutral-400",
	  "text-neutral-900",
	  "text-white",
	  "text-fuchsia-600",
	  "text-cyan-400",
	  "text-pink-400",
	  "border-cyan-400"
	],
	theme: {
	  extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
  };
  