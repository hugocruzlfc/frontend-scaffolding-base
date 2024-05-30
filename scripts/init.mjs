import fs from "node:fs";
import path from "node:path";

const FOLDER_NAME = "frontend-base-project";

async function init() {
  const cwd = process.cwd();

  const originProject = path.resolve(cwd);
  const destProject = path.resolve(cwd, "..", "..", FOLDER_NAME);

  copy(originProject, destProject);

  removeUnnecessaryFiles(destProject);
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function removeUnnecessaryFiles(dir) {
  const files = [
    "scripts",
    "node_modules",
    "package-lock.json",
    "yarn.lock",
    ".git",
  ];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    }
  }
}

init().catch((e) => {
  console.error(e);
});
