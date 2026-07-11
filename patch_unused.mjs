import fs from 'fs';

const filepath = 'src/commands/submit-benchmark.ts';
let code = fs.readFileSync(filepath, 'utf8');

code = code.replace(
  `import { execFileSync, execSync, spawnSync } from "node:child_process";`,
  `import { execFileSync, spawnSync } from "node:child_process";`
);

fs.writeFileSync(filepath, code);

const filepath_upload = 'src/gemmaclaw/benchmark-kit/upload.ts';
let code_upload = fs.readFileSync(filepath_upload, 'utf8');

code_upload = code_upload.replace(
  `import { execFileSync, execSync } from "node:child_process";`,
  `import { execFileSync } from "node:child_process";`
);

fs.writeFileSync(filepath_upload, code_upload);
console.log("Patched successfully");
