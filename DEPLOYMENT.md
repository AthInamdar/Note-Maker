
# 🚀 Deployment Guide

This project is configured to be deployed for **free** using **Render** (Backend & Database) and **Vercel** (Frontend).

## Part 1: Backend Deployment (Render)

1.  **Sign Up/Login** to [Render](https://render.com/).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository: `Note-Maker`.
4.  Select the **backend** folder (or root if you organize it that way, but here `Root Directory` should be `backend`).
    *   **Root Directory**: `backend`
    *   **Runtime**: `Python 3`
    *   **Build Command**: `./build.sh`
    *   **Start Command**: `gunicorn backend.wsgi:application`
5.  **Environment Variables** (Add these in the "Environment" tab):
    *   `PYTHON_VERSION`: `3.11.9`
    *   `SECRET_KEY`: (Generate a random string)
    *   `DEBUG`: `False`
    *   `DATABASE_URL`: (We will get this in the next step, wait for now)

6.  **Create Database**:
    *   In Render Dashboard, click **New +** -> **PostgreSQL**.
    *   Name: `notemaker-db` (or similar).
    *   Plan: **Free**.
    *   After creation, copy the **Internal Database URL** (it starts with `postgres://...`).
    *   Go back to your Web Service -> Environment -> Add/Update `DATABASE_URL` with this value.

7.  **Finalize**:
    *   The Web Service will deploy. Wait for the green "Live" badge.
    *   Copy your Backend URL (e.g., `https://notemaker-backend.onrender.com`).

---

## Part 2: Frontend Deployment (Vercel)

1.  **Sign Up/Login** to [Vercel](https://vercel.com/).
2.  Click **Add New...** -> **Project**.
3.  Import `Note-Maker` repository.
4.  **Configure Project**:
    *   **Framework Preset**: `Vite`
    *   **Root Directory**: Click `Edit` and select `frontend`.
    *   **Environment Variables**:
        *   `VITE_API_URL`: Paste your **Render Backend URL** (no trailing slash).
5.  Click **Deploy**.

## Part 3: Verify

1.  Open your Vercel URL.
2.  Try to Register/Login.
3.  Enjoy your free full-stack app!

## Troubleshooting

*   **CORS Errors**: If you see CORS errors in the console, your backend `CORS_ALLOW_ALL_ORIGINS` is set to `True`, so it should work. If you changed it, ensure your Vercel domain is in `CORS_ALLOWED_ORIGINS`.
*   **Database**: If data isn't saving, check `DATABASE_URL` in Render.
*   **Static Files**: If Admin panel looks broken, check `build.sh` executed `collectstatic`.
