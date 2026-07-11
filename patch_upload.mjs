import fs from 'fs';

const filepath = 'src/gemmaclaw/benchmark-kit/upload.ts';
let code = fs.readFileSync(filepath, 'utf8');

code = code.replace(
  `import { execSync } from "node:child_process";`,
  `import { execFileSync, execSync } from "node:child_process";`
);

code = code.replace(
  /execSync\(`gh repo fork \$\{opts\.targetRepo\} --clone=false`, \{/,
  `execFileSync("gh", ["repo", "fork", opts.targetRepo, "--clone=false"], {`
);

code = code.replace(
  /execSync\("gh api user --jq \.login", \{ encoding: "utf8", timeout: 10_000 \}\)/,
  `execFileSync("gh", ["api", "user", "--jq", ".login"], { encoding: "utf8", timeout: 10_000 })`
);

code = code.replace(
  /execSync\(`gh repo clone \$\{forkRepo\} \$\{tmpDir\} -- --depth 1`, \{/,
  `execFileSync("gh", ["repo", "clone", forkRepo, tmpDir, "--", "--depth", "1"], {`
);

code = code.replace(
  /execSync\(`git checkout -b "\$\{branchName\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["checkout", "-b", branchName], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git add "\$\{opts\.datasetDir\}\/\$\{resultFileName\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["add", \`\${opts.datasetDir}/\${resultFileName}\`], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git commit -m "benchmark: add result \$\{anon\.runId\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["commit", "-m", \`benchmark: add result \${anon.runId}\`], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git push origin "\$\{branchName\}"`, \{ cwd: tmpDir, stdio: "pipe", timeout: 60_000 \}\);/,
  `execFileSync("git", ["push", "origin", branchName], { cwd: tmpDir, stdio: "pipe", timeout: 60_000 });`
);

code = code.replace(
  /execSync\(\s*`gh pr create --repo \$\{opts\.targetRepo\} --head "\$\{ghUser\}:\$\{branchName\}" --title "benchmark: \$\{anon\.model\.name\} \$\{anon\.summary\.percentage\}% on \$\{anon\.hardware\.cpu\.arch\}" --body "\$\{prBody\.replace\(\/\\"\/g, '\\\\\\"'\)\}"`,/,
  `execFileSync("gh", ["pr", "create", "--repo", opts.targetRepo, "--head", \`\${ghUser}:\${branchName}\`, "--title", \`benchmark: \${anon.model.name} \${anon.summary.percentage}% on \${anon.hardware.cpu.arch}\`, "--body", prBody],`
);

fs.writeFileSync(filepath, code);
console.log("Patched successfully");
