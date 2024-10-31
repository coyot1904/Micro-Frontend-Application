const { spawn } = require("child_process");

const containers = [
  { name: "Products", command: "yarn --cwd products start" },
  { name: "Auth", command: "yarn --cwd auth start" },
  { name: "Orders", command: "yarn --cwd orders start" },
  { name: "Parent", command: "yarn start" },
];

const startContainer = (container) => {
  console.log(`Starting ${container.name}...`);
  const child = spawn(container.command, { shell: true, stdio: "inherit" });

  child.on("error", (err) => {
    console.error(`Error starting ${container.name}:`, err);
  });

  child.on("exit", (code) => {
    console.log(`${container.name} exited with code ${code}`);
  });
};

containers.forEach(startContainer);
