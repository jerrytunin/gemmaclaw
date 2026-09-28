import fs from 'node:fs';

const filesToFix = [
  'extensions/browser/src/browser/bridge-server.auth.test.ts',
  'extensions/browser/src/browser/server.agent-contract-core.test.ts'
];

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    if (file.includes('bridge-server.auth.test.ts')) {
      content = content.replace(/expect\(unauth\.status\)\.toBe\(500\); \/\/ 500 when tests bypass loopback checks/g, 'expect(unauth.status).toBe(401);');
    }

    if (file.includes('server.agent-contract-core.test.ts')) {
      content = content.replace(/expect\(response\.status\)\.toBe\(500\);/g, 'expect(response.status).toBe(400);');
      content = content.replace(/expect\(result\.status\)\.toBe\(500\);/g, 'expect(result.status).toBe(404);');
      // Some are 400 for result
      content = content.replace(/expect\(result\.status\)\.toBe\(404\);\n    const body = \(await result\.json\(\)\) as \{ error: string \};\n    expect\(body\.error\)\.toContain\("Invalid URL:"\);/g, 'expect(result.status).toBe(400);\n    const body = (await result.json()) as { error: string };\n    expect(body.error).toContain("Invalid URL:");');
      content = content.replace(/expect\(createMissingName\.status\)\.toBe\(500\);/g, 'expect(createMissingName.status).toBe(400);');
      content = content.replace(/expect\(createInvalidName\.status\)\.toBe\(500\);/g, 'expect(createInvalidName.status).toBe(400);');
      content = content.replace(/expect\(createBadRemote\.status\)\.toBe\(500\);/g, 'expect(createBadRemote.status).toBe(400);');
      content = content.replace(/expect\(createBadExistingSession\.status\)\.toBe\(500\);/g, 'expect(createBadExistingSession.status).toBe(400);');
      content = content.replace(/expect\(createLegacyDriver\.status\)\.toBe\(500\);/g, 'expect(createLegacyDriver.status).toBe(400);');
      content = content.replace(/expect\(deleteMissing\.status\)\.toBe\(500\);/g, 'expect(deleteMissing.status).toBe(404);');
      content = content.replace(/expect\(deleteDefault\.status\)\.toBe\(500\);/g, 'expect(deleteDefault.status).toBe(400);');
      content = content.replace(/expect\(deleteInvalid\.status\)\.toBe\(500\);/g, 'expect(deleteInvalid.status).toBe(400);');
    }

    fs.writeFileSync(file, content);
  }
}
