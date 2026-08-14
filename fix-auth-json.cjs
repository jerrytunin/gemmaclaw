const fs = require('fs');

// fix bridge-server.ts
let bridgeServerContent = fs.readFileSync('extensions/browser/src/browser/bridge-server.ts', 'utf8');
bridgeServerContent = bridgeServerContent.replace(/res\.status\(401\)\.send\("Unauthorized"\);/g, 'res.status(401).json({ error: "Unauthorized" });');
bridgeServerContent = bridgeServerContent.replace(/res\.status\(400\)\.send\("Missing token"\);/g, 'res.status(400).json({ error: "Missing token" });');
bridgeServerContent = bridgeServerContent.replace(/res\.status\(404\)\.send\("Invalid or expired token"\);/g, 'res.status(404).json({ error: "Invalid or expired token" });');
fs.writeFileSync('extensions/browser/src/browser/bridge-server.ts', bridgeServerContent, 'utf8');

// fix server-middleware.ts
let serverMiddlewareContent = fs.readFileSync('extensions/browser/src/browser/server-middleware.ts', 'utf8');
serverMiddlewareContent = serverMiddlewareContent.replace(/res\.status\(401\)\.send\("Unauthorized"\);/g, 'res.status(401).json({ error: "Unauthorized" });');
fs.writeFileSync('extensions/browser/src/browser/server-middleware.ts', serverMiddlewareContent, 'utf8');

// fix csrf.ts
let csrfContent = fs.readFileSync('extensions/browser/src/browser/csrf.ts', 'utf8');
csrfContent = csrfContent.replace(/res\.status\(403\)\.send\("Forbidden"\);/g, 'res.status(403).json({ error: "Forbidden" });');
fs.writeFileSync('extensions/browser/src/browser/csrf.ts', csrfContent, 'utf8');
