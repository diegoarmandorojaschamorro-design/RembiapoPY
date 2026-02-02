# RembiapoPY 🚀

Aplicación web tipo marketplace de servicios (inspirada en PedidosYa),
donde los usuarios pueden buscar y publicar profesionales como
electricistas, profesores, técnicos, etc.

## ✨ Funcionalidades principales

- ✅ Login con email y contraseña *(demo/local)*
- ✅ Login con Google (OAuth 2.0)
- ✅ Creación automática de usuarios (si no existe)
- ✅ Manejo de sesiones con token en DB + cookie HttpOnly
- ✅ Endpoint de sesión: `/api/me`
- ✅ Logout: `/api/auth/logout`
- ✅ Base de datos SQLite
- ✅ Frontend web simple y responsive

---

## 🛠️ Tecnologías usadas

### Backend
- Python
- Flask
- SQLite
- Google OAuth (google-auth)
- Requests (intercambio `code -> token`)

### Frontend
- HTML
- CSS
- JavaScript
- Google Identity Services (botón Google)