THE COVE RESTAURANT — COMPLETE STATIC WEBSITE
Prepared November 7, 2026

VIEW ON YOUR WINDOWS COMPUTER
1. Right-click The_Cove_Restaurant_Website.zip and choose Extract All.
2. Open the extracted cove-restaurant folder.
3. Double-click index.html. It opens in Edge, Chrome, Firefox, or Safari.
Keep the assets folder beside the HTML files. Do not preview inside the ZIP.
No installation, Node.js, database, web server, or build process is required.
The pages, photos, menu search, navigation, and styles work locally/offline.
Google Maps and Facebook require internet. Phone and email links use your
computer's or phone's configured applications. Printing opens your browser's
print dialog.

UPLOAD TO YOUR WEB HOST
1. Back up your current website and hosting settings.
2. Upload the CONTENTS of cove-restaurant to your host's public web directory
   (often public_html or wwwroot), preserving the assets subdirectories.
3. Make index.html the default document. If the old site has index.php, your
   host may prioritize it. Back it up and configure index.html as the default,
   or remove the old index.php only after confirming the new deployment.
4. Enable HTTPS using the host's normal certificate setup.
5. Open the live home, menu, visit, and accessibility pages; test internal
   links, telephone/email links, and images.
6. Set permanent redirects through your host for old public URLs:
   index.php -> /
   contact.php -> /visit.html
   directions.php -> /visit.html
   entertainment.php -> /index.html#entertainment
   CoveMenu042226.pdf -> /assets/documents/the-cove-menu.pdf
   Host-specific redirect rules are not forced by this package.

WHAT IS INCLUDED
index.html             Home, story, entertainment, photographs, and hours
menu.html              Complete HTML menu with optional search and printing
visit.html             Address, hours, phone, email, and map link
accessibility.html     Accessible-menu link and contact assistance
assets/css/styles.css  All responsive layouts, colors, print styles
assets/js/site.js      Navigation, menu search, and print controls
assets/images/         Original website photos/logo, optimized local copies
assets/documents/      Original 2-page restaurant menu PDF
CONTENT-SOURCES.txt    Source records and pre-launch content checks
ACCESSIBILITY-NOTES.txt Accessibility implementation and verification limits

MAKE CHANGES
The production HTML is the source of truth. Edit with VS Code, Notepad++, or
another plain-text editor. Save as UTF-8. No rebuild is needed.

Menu: edit item names, descriptions, and prices directly in menu.html.
Keep each article's class="menu-item" and category section IDs. The search
uses the visible HTML, so your edits automatically become searchable.

Hours: update both index.html and visit.html. All times are local to Rhode
Island. Holiday hours are intentionally not assumed.

Header/footer/contact: these are repeated in all four HTML files. Change all
four consistently. If changing domain, update the Restaurant JSON-LD URL in
each file. The menu URL is relative so subfolder hosting works as well.

Images: replace local image files or their HTML src paths; update alt text and
width/height attributes to match. Photographs belong to their original rights
holders. This package uses original website assets as requested; it does not
grant a new stock-photo license.

Colors/fonts/spacing: adjust CSS variables at the top of styles.css. Keep
sufficient contrast and keyboard focus outlines. Fonts use local system fonts
and do not load from a third-party font service.

SEARCH AND PRIVACY
No analytics, trackers, cookies, remote fonts, contact-form services, or
third-party JavaScript are embedded. Menu search runs in the browser and sends
nothing to a server. There is no online ordering, booking system, or form
backend. Calls and email are the working contact options.

BEFORE LAUNCH
Confirm menu prices, policies, hours, and karaoke details with the restaurant.
See CONTENT-SOURCES.txt. Run final accessibility testing on the deployed site;
see ACCESSIBILITY-NOTES.txt. The supplied PDF is an unchanged legacy document
and is not an accessible replacement for the HTML menu.
