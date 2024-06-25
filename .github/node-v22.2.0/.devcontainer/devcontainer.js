{
  "name": "Node.js Core Developer Environment",
  "extensions": [
    "github.vscode-pull-request-github",
    "ms-vsliveshare.vsliveshare",
    "vscode-icons-team.vscode-icons",
    "visualstudioexptteam.vscodeintellicode"
  ],
  "image": "nodejs/devcontainer:nightly",
  "initializeCommand": "docker system prune -f -a",
  "settings": {
    "terminal.integrated.profiles.linux": {
      "zsh (login)": {
        "path": "zsh",
        "args": ["-l"]
      }
    }
  }
}
