import fs from 'node:fs';

let content = fs.readFileSync('src/commands/submit-benchmark.ts', 'utf-8');
content = content.replace(
  /execSync\(`gh pr create --repo \$\{targetRepo\} --head "\$\{ghUser\}:\$\{branchName\}" --title \$\{JSON\.stringify\(prTitle\)\} --body-file \$\{JSON\.stringify\(prBodyFile\)\}`,/g,
  `execFileSync("gh", ["pr", "create", "--repo", targetRepo, "--head", \`\${ghUser}:\${branchName}\`, "--title", prTitle, "--body-file", prBodyFile],`
);
content = content.replace(
  /import \{ execSync, spawnSync \} from "node:child_process";/g,
  `import { execSync, execFileSync, spawnSync } from "node:child_process";`
);
fs.writeFileSync('src/commands/submit-benchmark.ts', content);

let content2 = fs.readFileSync('src/gemmaclaw/benchmark-kit/upload.ts', 'utf-8');
content2 = content2.replace(
  /execSync\(\s*`gh pr create --repo \$\{opts\.targetRepo\} --head "\$\{ghUser\}:\$\{branchName\}" --title "benchmark: \$\{anon\.model\.name\} \$\{anon\.summary\.percentage\}% on \$\{anon\.hardware\.cpu\.arch\}" --body "\$\{prBody\.replace\(\/\\"\/\g, '\\\\"'\)\}"`,/g,
  `execFileSync("gh", ["pr", "create", "--repo", opts.targetRepo, "--head", \`\${ghUser}:\${branchName}\`, "--title", \`benchmark: \${anon.model.name} \${anon.summary.percentage}% on \${anon.hardware.cpu.arch}\`, "--body", prBody],`
);
content2 = content2.replace(
  /import \{ execSync \} from "node:child_process";/g,
  `import { execSync, execFileSync } from "node:child_process";`
);
fs.writeFileSync('src/gemmaclaw/benchmark-kit/upload.ts', content2);

let content3 = fs.readFileSync('src/gemmaclaw/benchmark/agent-runner.ts', 'utf-8');
content3 = content3.replace(
  /execSync\(`python3 \$\{script\}`/g,
  `execFileSync("python3", [script]`
);
content3 = content3.replace(
  /import \{ execSync, spawn \} from "node:child_process";/g,
  `import { execSync, execFileSync, spawn } from "node:child_process";`
);
fs.writeFileSync('src/gemmaclaw/benchmark/agent-runner.ts', content3);
