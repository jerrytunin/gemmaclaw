import fs from 'fs';

const filepath = 'src/commands/submit-benchmark.ts';
let code = fs.readFileSync(filepath, 'utf8');

code = code.replace(
  `import { execSync, spawnSync } from "node:child_process";`,
  `import { execFileSync, execSync, spawnSync } from "node:child_process";`
);

code = code.replace(
  /execSync\(`gh repo fork \$\{targetRepo\} --clone=false`, \{ stdio: "pipe", timeout: 30_000 \}\);/,
  `execFileSync("gh", ["repo", "fork", targetRepo, "--clone=false"], { stdio: "pipe", timeout: 30_000 });`
);

code = code.replace(
  /execSync\("gh api user --jq \.login", \{/,
  `execFileSync("gh", ["api", "user", "--jq", ".login"], {`
);

code = code.replace(
  /execSync\(`gh repo clone \$\{forkRepo\} \$\{tmpDir\} -- --depth 1`, \{/,
  `execFileSync("gh", ["repo", "clone", forkRepo, tmpDir, "--", "--depth", "1"], {`
);

code = code.replace(
  /execSync\(`git remote add upstream https:\/\/github\.com\/\$\{targetRepo\}\.git`, \{/,
  `execFileSync("git", ["remote", "add", "upstream", \`https://github.com/\${targetRepo}.git\`], {`
);

code = code.replace(
  /execSync\("git fetch upstream", \{ cwd: tmpDir, stdio: "pipe", timeout: 60_000 \}\);/,
  `execFileSync("git", ["fetch", "upstream"], { cwd: tmpDir, stdio: "pipe", timeout: 60_000 });`
);

code = code.replace(
  /execSync\("git symbolic-ref --short HEAD", \{/,
  `execFileSync("git", ["symbolic-ref", "--short", "HEAD"], {`
);

code = code.replace(
  /execSync\(`git reset --hard upstream\/\$\{defaultBranch\}`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["reset", "--hard", \`upstream/\${defaultBranch}\`], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\("git reset --hard upstream\/main", \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["reset", "--hard", "upstream/main"], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git checkout -b "\$\{branchName\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["checkout", "-b", branchName], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git add "\$\{datasetDir\}\/\$\{resultFileName\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["add", \`\${datasetDir}/\${resultFileName}\`], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git commit -m "benchmark: add result \$\{runId\}"`, \{ cwd: tmpDir, stdio: "pipe" \}\);/,
  `execFileSync("git", ["commit", "-m", \`benchmark: add result \${runId}\`], { cwd: tmpDir, stdio: "pipe" });`
);

code = code.replace(
  /execSync\(`git push --force-with-lease origin "\$\{branchName\}"`, \{/,
  `execFileSync("git", ["push", "--force-with-lease", "origin", branchName], {`
);

code = code.replace(
  /execSync\(\s*`gh pr create --repo \$\{targetRepo\} --head "\$\{ghUser\}:\$\{branchName\}" --title \$\{JSON\.stringify\(prTitle\)\} --body-file \$\{JSON\.stringify\(prBodyFile\)\}`,/,
  `execFileSync("gh", ["pr", "create", "--repo", targetRepo, "--head", \`\${ghUser}:\${branchName}\`, "--title", prTitle, "--body-file", prBodyFile],`
);

fs.writeFileSync(filepath, code);
console.log("Patched successfully");
