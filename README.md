# NexVault

Tu hub de juegos y personal: APKs, mods y texturas de Minecraft y otros recursos, organizados por categorías y subcarpetas.

🌐 **Web:** https://anderc18.github.io/NexVault/

## Funciones

- **Categorías y subcarpetas** con tarjetas para cada enlace.
- **Buscador** global (atajo: tecla `/`), sin importar tildes ni mayúsculas.
- **Tipo de archivo automático** (APK, MCPACK, MCADDON, ZIP, PDF…) detectado a partir de la URL, con su icono.
- **Versión, etiquetas y descripción** opcionales en cada enlace.
- **Favoritos ★, Novedades y Recientes**, guardados en el navegador de cada visitante.
- **Copiar enlace** y **código QR** para pasar archivos al móvil.
- **Tema claro / oscuro.**
- **Instalable como app** (PWA) y se abre sin conexión con la última copia.
- Las categorías y carpetas vacías se ocultan a los visitantes.

## Administración

1. Pulsa **Entrar como admin** e inicia sesión con la cuenta de Google autorizada.
2. Podrás crear, editar, ordenar (flechas ◀ ▶) y eliminar categorías, subcarpetas y enlaces.
3. **Copia de seguridad** descarga todos los datos en JSON; **Importar** los restaura.

Los datos se guardan en Firebase Firestore. Quién puede editar lo deciden las reglas de [`firestore.rules`](firestore.rules), que se publican desde la consola de Firebase (cambiando `TU_CORREO@gmail.com` por el correo del administrador).

## Tecnología

Un solo `index.html` (HTML + CSS + JavaScript, sin compilación), Firebase (Firestore + Authentication), [Tabler Icons](https://tabler.io/icons) y [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator). Publicado con GitHub Pages.
