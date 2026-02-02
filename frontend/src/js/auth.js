
// Maneja el login del usuario (Google y formulario)

import { apiFetch } from "./api.js";

function showMsg(text) {

    // Muestra mensajes de error o estado en pantalla

  document.getElementById("msg").textContent = text || "";
}

function setToken(token) {
  localStorage.setItem("token", token);
}

// Login local (email + password)

async function handleLogin() {
  showMsg("");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { res, data } = await apiFetch("/auth/login", {
    method: "POST",
    body: { email, password },
  });

  if (!res.ok) {
    showMsg(data.error || "No se pudo iniciar sesión.");
    return;
  }

  setToken(data.token);
  alert("✅ Login OK: " + data.user.email);
}

// Registro local (email + password)

async function handleRegister() {
  showMsg("");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { res, data } = await apiFetch("/auth/register", {
    method: "POST",
    body: { email, password },
  });

  if (!res.ok) {
    showMsg(data.error || "No se pudo registrar.");
    return;
  }

  setToken(data.token);
  alert("✅ Cuenta creada: " + data.user.email);
}


// Login con Google


async function handleGoogleCredential(response) {
    
    // Envía el token de Google al backend para validación

  showMsg("");

  const { res, data } = await apiFetch("/auth/google", {
    method: "POST",
    body: { credential: response.credential },
  });

  if (!res.ok) {
    showMsg(data.error || "Google login falló.");
    return;
  }

  setToken(data.token);
  alert("✅ Google Login OK: " + data.user.email);
}

// Init page

export function initLoginPage() {

    // Inicializa botones y eventos del login
  
    // Botones login / register

  document.getElementById("btnLogin")?.addEventListener("click", handleLogin);
  document.getElementById("btnRegister")?.addEventListener("click", handleRegister);

  
    // Google Identity Services

  const GOOGLE_CLIENT_ID =
    "877002585907-ne7tte3vil46lrasqmj4np2kqq4l8t4l.apps.googleusercontent.com";

  if (!window.google?.accounts?.id) {
    showMsg("No cargó Google Identity Services. Revisá conexión o el script.");
    return;
  }

  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    { theme: "outline", size: "large", width: 360 }
  );
}
