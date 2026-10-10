# Mark Grintšin Portfolio

Personal portfolio for an IT Systems Junior Specialist student at Rakvere Ametikool. The main page presents practical projects and a three-month Erasmus+ internship goal in Spain.

Live site: https://mark123601.github.io/Portfoolio/

Last updated: 10 October 2026

## Main page

- English and Estonian content with a language switch and a saved language preference.
- A dedicated About me section with practical experience, learning goals and placement availability.
- PC repair, a Minecraft server project with a friend, and PowerShell school coursework.
- Skills described through practical experience rather than percentage scores.
- Education, contact links and downloadable English CV files in PDF and Word formats.
- One shared top navigation across all pages, including Home, About me, Projects, Skills, Education, Documents, IT links and Contact.
- Responsive navigation, keyboard focus styles and expandable project descriptions.
- Matching forest green and cream styling across the main page, education, documents and all 18 existing IT resource links.

All four pages are static HTML and share `portfolio.css` and `portfolio.js`. They use system fonts; no installation, third-party runtime or build step is needed. All asset links are relative so it works at the GitHub Pages project path `/Portfoolio/`.

## Documents and existing pages

- `assets/CV_Mark_Grintsin_EN.pdf` and `assets/CV_Mark_Grintsin_EN.docx` are the current CV downloads.
- `dokumendid/cv_Mark_IT25.pdf` contains the same updated PDF to preserve existing CV links.
- `documents.html`, `education.html` and `koodilehekulg.html` remain available, together with the existing school documents.
- All supplementary pages now share the main page design and language preference. Documents open directly as PDFs; the current CV also downloads as Word.
- The earlier React components and Tailwind files are retained as legacy source but are not loaded by the active pages.

## Editing

1. Edit the visible default English text in the appropriate HTML page and both English and Estonian dictionaries in `portfolio.js` together.
2. Edit `portfolio.css` to update the shared design across all pages.
3. Keep claims, project contributions and skill descriptions accurate.
4. Replace both CV downloads when contact details or availability change. Also replace `dokumendid/cv_Mark_IT25.pdf` with the updated PDF.
5. Keep the existing Google site verification meta tag and canonical GitHub Pages URL.
6. Check language switching, mobile navigation, project expansion, local links and CV downloads before publishing.

For a local preview, run `python3 -m http.server 8000` in the repository and open `http://localhost:8000/`.

## Publishing

Merge the reviewed changes into the branch configured for GitHub Pages. The update keeps the existing static file layout and does not change the site's GitHub Pages configuration.
