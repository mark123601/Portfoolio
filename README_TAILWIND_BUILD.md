Build instructions for generating a single, static CSS file with Tailwind

1) Install build dependencies (run once):

   npm install -D tailwindcss postcss autoprefixer

2) Build the CSS:

   npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css --config tailwind.config.cjs --minify

3) After successful build, open `index.html` (and other HTML files) — they reference `dist/tailwind.css`.

Notes:
- Run the build again whenever you change component classes or `src/input.css`.
- If you prefer a dev watch mode, run:

   npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css --config tailwind.config.cjs --watch

- If `npx` is not available, install Tailwind CLI globally or run via an npm script.
