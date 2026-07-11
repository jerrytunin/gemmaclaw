import fs from 'fs';

const filepath = 'src/gemmaclaw/benchmark-kit/upload.ts';
let code = fs.readFileSync(filepath, 'utf8');

code = code.replace(
  `const prUrl = execSync(
      \`gh pr create --repo \${opts.targetRepo} --head "\${ghUser}:\${branchName}" --title "benchmark: \${anon.model.name} \${anon.summary.percentage}% on \${anon.hardware.cpu.arch}" --body "\${prBody.replace(/"/g, '\\\\"')}"\`,
      { cwd: tmpDir, encoding: "utf8", timeout: 30_000 },
    ).trim();`,
  `const prUrl = execFileSync("gh", ["pr", "create", "--repo", opts.targetRepo, "--head", \`\${ghUser}:\${branchName}\`, "--title", \`benchmark: \${anon.model.name} \${anon.summary.percentage}% on \${anon.hardware.cpu.arch}\`, "--body", prBody],
      { cwd: tmpDir, encoding: "utf8", timeout: 30_000 },
    ).trim();`
);

fs.writeFileSync(filepath, code);
console.log("Patched successfully");
