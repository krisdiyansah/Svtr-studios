/**
 * SAVITAR.STUDIOS // PRODUCTION APPLICATION SERVER
 * Fullstack Security & Protected Admin Route Cloaking
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load environment variables if .env exists
const envPath = path.join(__dirname, '.env');
const env = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim();
        env[key] = val;
      }
    }
  });
}

const PORT = process.env.PORT || env.PORT || 3000;
let ADMIN_USER = process.env.ADMIN_USERNAME || env.ADMIN_USERNAME || 'admin';
let ADMIN_PASS = process.env.ADMIN_PASSWORD || env.ADMIN_PASSWORD || 'savitar2026!';
const ADMIN_RECOVERY_KEY = process.env.ADMIN_RECOVERY_KEY || env.ADMIN_RECOVERY_KEY || 'SVTR-RECOVERY-KEY-2026';
const ADMIN_SECRET_PATH = process.env.ADMIN_SECRET_PATH || env.ADMIN_SECRET_PATH || '/svtr-portal-master';

// Active in-memory sessions: sessionToken -> { createdAt, isAdmin }
const activeSessions = new Map();

// Helper: parse cookies
function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach(c => {
    const [k, v] = c.trim().split('=');
    if (k && v) cookies[k] = decodeURIComponent(v);
  });
  return cookies;
}

// Helper: verify if request is an authenticated admin
function isAdmin(req) {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies.svtr_session;
  if (!token) return false;
  const session = activeSessions.get(token);
  if (!session || !session.isAdmin) return false;
  // Expire after 12 hours
  if (Date.now() - session.createdAt > 12 * 60 * 60 * 1000) {
    activeSessions.delete(token);
    return false;
  }
  return true;
}

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.sql': 'text/plain'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // ---------------------------------------------------------------------------
  // 1. SECURITY CLOAKING: BLOKIR AKSES LANGSUNG KE /admin.html ATAU /admin
  // ---------------------------------------------------------------------------
  // Jika buyer mengetik "admin.html" atau "/admin", balas dengan 404 murni
  if (pathname === '/admin.html' || pathname === '/admin' || pathname === '/admin/') {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(`
      <!DOCTYPE html>
      <html><head><title>404 Not Found</title></head>
      <body style="background:#000; color:#888; font-family:monospace; padding:3rem; text-align:center;">
        <h1 style="color:#fff;">404 NOT FOUND</h1>
        <p>The requested URL was not found on this server.</p>
        <p><a href="/" style="color:#ccff00;">Return to Savitar Studios Home</a></p>
      </body></html>
    `);
  }

  // ---------------------------------------------------------------------------
  // 2. AUTHENTICATION API ENDPOINTS
  // ---------------------------------------------------------------------------
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { username, password } = JSON.parse(body);
        if (username === ADMIN_USER && password === ADMIN_PASS) {
          const token = crypto.randomBytes(32).toString('hex');
          activeSessions.set(token, { createdAt: Date.now(), isAdmin: true });

          // Set secure HttpOnly cookie
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Set-Cookie': `svtr_session=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=43200`
          });
          return res.end(JSON.stringify({ success: true, message: 'Authentication successful' }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: 'Malformed JSON' }));
      }
    });
    return;
  }

  if (pathname === '/api/auth/logout' && req.method === 'POST') {
    const cookies = parseCookies(req.headers.cookie);
    if (cookies.svtr_session) {
      activeSessions.delete(cookies.svtr_session);
    }
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Set-Cookie': 'svtr_session=; HttpOnly; Path=/; Max-Age=0'
    });
    return res.end(JSON.stringify({ success: true }));
  }

  // Reset Password via Master Recovery Key
  if (pathname === '/api/auth/reset-password' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { username, recoveryKey, newPassword } = JSON.parse(body);
        if (recoveryKey === ADMIN_RECOVERY_KEY) {
          if (username) ADMIN_USER = username;
          if (newPassword && newPassword.length >= 6) {
            ADMIN_PASS = newPassword;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, message: 'Password reset successful' }));
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, message: 'Password must be at least 6 characters' }));
          }
        } else {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Invalid master recovery key' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: 'Malformed JSON' }));
      }
    });
    return;
  }

  // Change Password from logged-in admin session
  if (pathname === '/api/auth/change-password' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { currentPassword, newPassword } = JSON.parse(body);
        if (currentPassword === ADMIN_PASS) {
          if (newPassword && newPassword.length >= 6) {
            ADMIN_PASS = newPassword;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, message: 'Password updated successfully' }));
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, message: 'Password must be at least 6 characters' }));
          }
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Current password incorrect' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: 'Malformed JSON' }));
      }
    });
    return;
  }

  if (pathname === '/api/auth/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ isAdmin: isAdmin(req) }));
  }

  // ---------------------------------------------------------------------------
  // 3. SECRET ROUTE KHUSUS ADMIN (HANYA ANDA YANG TAHU URL INI)
  // ---------------------------------------------------------------------------
  if (pathname === ADMIN_SECRET_PATH) {
    const adminFilePath = path.join(__dirname, 'admin.html');
    if (fs.existsSync(adminFilePath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow, noarchive' // Mencegah Google mengindeks halaman admin
      });
      return fs.createReadStream(adminFilePath).pipe(res);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. PUBLIC BUYER FILES (index.html, style.css, app.js, assets/...)
  // ---------------------------------------------------------------------------
  let safePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.join(__dirname, safePath);

  // Cegah directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('Access Denied');
  }

  // Cegah akses langsung ke file sensitif
  const blockedFiles = ['.env', 'server.js', 'package.json', 'package-lock.json'];
  if (blockedFiles.some(b => safePath.toLowerCase().endsWith(b))) {
    res.writeHead(404);
    return res.end('404 Not Found');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff'
    });
    return fs.createReadStream(filePath).pipe(res);
  }

  // 404 Fallback
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html><head><title>404 Not Found</title></head>
    <body style="background:#080808; color:#888; font-family:monospace; padding:3rem; text-align:center;">
      <h1 style="color:#f5f5f5;">SAVITAR.STUDIOS // 404</h1>
      <p>Halaman tidak ditemukan.</p>
      <p><a href="/" style="color:#ccff00;">Kembali ke Katalog Utama</a></p>
    </body></html>
  `);
});

server.listen(PORT, () => {
  console.log('================================================================');
  console.log(`⚡ SAVITAR.STUDIOS FULLSTACK PRODUCTION SERVER ACTIVE`);
  console.log(`🌐 Public Buyer Store:   http://localhost:${PORT}/`);
  console.log(`🔒 Secret Admin Console: http://localhost:${PORT}${ADMIN_SECRET_PATH}`);
  console.log(`🚫 Public /admin route:  404 Cloaked & Blocked from Buyers`);
  console.log('================================================================');
});
