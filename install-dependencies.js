const { exec } = require("child_process");
const path = require("path");

// Array of paths to child micro-frontends
const microFrontends = ["products", "auth", "orders"];

const installDependencies = (dir) => {
  return new Promise((resolve, reject) => {
    exec("yarn install", { cwd: dir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing dependencies in ${dir}: ${stderr}`);
        reject(error);
      } else {
        console.log(`Dependencies installed in ${dir}:\n${stdout}`);
        resolve();
      }
    });
  });
};

const installAll = async () => {
  try {
    // Install dependencies in parent
    await installDependencies(process.cwd());

    // Install dependencies in each micro-frontend
    for (const microFrontend of microFrontends) {
      const microFrontendPath = path.join(__dirname, microFrontend);
      await installDependencies(microFrontendPath);
    }
    console.log("All dependencies installed successfully.");
  } catch (error) {
    console.error("Failed to install some dependencies:", error);
  }
};

installAll();
