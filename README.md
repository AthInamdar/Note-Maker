# Note Maker (Django + React)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Python](https://img.shields.io/badge/python-3.8%2B-brightgreen.svg)](https://www.python.org/) [![Django](https://img.shields.io/badge/django-3.2%2B-green.svg)](https://www.djangoproject.com/) [![React](https://img.shields.io/badge/react-18-blue.svg)](https://reactjs.org/)

A modern, responsive note-taking web application built with a Django REST API backend and a React frontend. Note Maker is designed for quick note capture, rich-text notes, tagging, and seamless synchronization between the frontend and backend.

---

## Key Features

- Create, read, update, and delete notes (CRUD)
- Rich text support (Markdown or WYSIWYG)
- Tagging and search for quick organization
- User authentication (JWT or session-based auth)
- Responsive React UI with smooth UX
- RESTful API served by Django + Django REST Framework

---

## Demo

****

---

## Tech stack

- Backend: Python, Django, Django REST Framework
- Frontend: React, Axios (or fetch), CSS/SCSS or Tailwind/Bootstrap
- Database: SQLite for development, PostgreSQL recommended for production
- Authentication: JSON Web Tokens (DRF SimpleJWT) or Django sessions

---

## Quick Start (Development)

These instructions assume you have Python 3.8+, Node.js, and npm/yarn installed.

1. Clone the repository

```bash
git clone https://github.com/AthInamdar/Note-Maker.git
cd Note-Maker
```

2. Backend - create and activate a virtual environment

```bash
python -m venv .venv
# macOS / Linux
source .venv/bin/activate
# Windows (PowerShell)
.\.venv\Scripts\Activate.ps1
```

3. Install backend dependencies

```bash
pip install -r requirements.txt
```

4. Configure environment variables

Copy the example `.env.example` (if present) to `.env` and update values such as `SECRET_KEY`, `DEBUG`, and database settings.

5. Run migrations and create a superuser

```bash
python manage.py migrate
python manage.py createsuperuser
```

6. Start the Django development server

```bash
python manage.py runserver
```

7. Frontend - install dependencies and start dev server

```bash
cd frontend
npm install # or yarn install
npm start # or yarn start
```

By default the React dev server runs on http://localhost:3000 and the Django API on http://localhost:8000. Configure proxy or CORS as needed.

---

## Production Build & Deployment

- Build frontend for production: `cd frontend && npm run build`. Serve the built assets via Django static files or use a separate static hosting (Netlify, Vercel) with the Django API hosted on a server (Heroku, DigitalOcean, Render, AWS).
- Use PostgreSQL, set `DEBUG=False`, rotate secrets, and configure allowed hosts and HTTPS.

---

## API Overview

Typical endpoints (examples):

- `POST /api/auth/` - login / obtain token
- `POST /api/auth/refresh/` - refresh token
- `GET /api/notes/` - list notes
- `POST /api/notes/` - create note
- `GET /api/notes/:id/` - retrieve note
- `PUT /api/notes/:id/` - update note
- `DELETE /api/notes/:id/` - delete note

Adjust paths if your implementation differs; consult the Django app's `urls.py` and DRF viewsets/serializers.

---

## Project Structure (example)

````text
Note-Maker/
├── backend/            # Django project and apps
├── frontend/           # React app (Create React App or Vite)
├── docs/               # screenshots and documentation assets
├── .env.example
├── requirements.txt
└── README.md
````

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to your branch: `git push origin feature-my-feature`
5. Open a Pull Request describing your changes

Please follow the existing code style and include tests where appropriate.

---

## Tips and Notes

- Enable CORS properly for local development (e.g., `django-cors-headers`) so your React app can access the API.
- Use `djoser` or `dj-rest-auth` for batteries-included auth flows if you need quick auth scaffolding.
- Add pagination, rate-limiting, and search endpoints for a production-ready API.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Maintainer: AthInamdar

Have questions or want to collaborate? Open an issue or reach out via GitHub!
