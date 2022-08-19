/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'completed-tasks': "url('/tareas-completas.png')",
                'pink-decoration': "url('/decoracion-rosa.png')",
                'about-us-banner': "url('/about-us-banner.png')",
                'form': "url('/fondo-form.png')",
            }
        }
    },
    plugins: [],
}