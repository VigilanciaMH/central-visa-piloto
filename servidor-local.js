const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const root = __dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function serve(port) {
  const server = http.createServer((req, res) => {
    const cleanUrl = decodeURIComponent(req.url.split("?")[0]);
    const relativeUrl = cleanUrl === "/" ? "/index.html" : cleanUrl;
    const file = path.resolve(root, "." + relativeUrl);

    if (!file.startsWith(root)) {
      res.writeHead(403);
      res.end("403");
      return;
    }

    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404");
        return;
      }

      res.writeHead(200, {
        "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream"
      });
      res.end(data);
    });
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && port < 8790) {
      serve(port + 1);
      return;
    }
    console.error("Nao foi possivel iniciar o servidor local:", err.message);
    process.exit(1);
  });

  server.listen(port, () => {
    const url = `http://localhost:${port}/#agua`;
    console.log("");
    console.log("Painel local aberto em:");
    console.log(url);
    console.log("");
    console.log("Deixe esta janela aberta enquanto estiver testando.");
    console.log("Para encerrar, pressione CTRL+C e depois feche a janela.");
    exec(`start "" "${url}"`);
  });
}

serve(8765);
