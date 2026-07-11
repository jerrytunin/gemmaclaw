import fs from 'fs';
let content = fs.readFileSync('src/commands/submit-benchmark.ts', 'utf8');

// just to see how many execSyncs
console.log(content.match(/execSync/g)?.length);
