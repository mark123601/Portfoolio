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
- Responsive navigation, keyboard focus styles and expandable project descriptions.

The main page is a self-contained static `index.html`. It uses system fonts and inline CSS and JavaScript; no installation or build step is needed for it. All asset links are relative so it works at the GitHub Pages project path `/Portfoolio/`.

## Documents and existing pages

- `assets/CV_Mark_Grintsin_EN.pdf` and `assets/CV_Mark_Grintsin_EN.docx` are the current CV downloads.
- `dokumendid/cv_Mark_IT25.pdf` contains the same updated PDF to preserve existing CV links.
- `documents.html`, `education.html` and `koodilehekulg.html` remain available, together with the existing school documents.
- The existing supplementary pages still use React, Babel and the prebuilt `dist/tailwind.css`. See `README_TAILWIND_BUILD.md` when editing their component classes.

## Editing

1. Edit the visible default English text and both `translations.en` and `translations.et` objects in `index.html` together.
2. Keep claims, project contributions and skill descriptions accurate.
3. Replace both CV downloads when contact details or availability change. Also replace `dokumendid/cv_Mark_IT25.pdf` with the updated PDF.
4. Keep the existing Google site verification meta tag and canonical GitHub Pages URL.
5. Check language switching, mobile navigation, project expansion, local links and CV downloads before publishing.

For a local preview, run `python3 -m http.server 8000` in the repository and open `http://localhost:8000/`.

## Publishing

Merge the reviewed changes into the branch configured for GitHub Pages. The update keeps the existing static file layout and does not change the site's GitHub Pages configuration.
