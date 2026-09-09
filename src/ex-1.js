// 1) Refactor this legacy callback-based function into TypeScript so it can be consumed using async/await.

function readFileCallback(path, callback) {
  setTimeout(() => {
    if (path.includes('error')) {
      callback(new Error('File not found'));
    } else {
      callback(null, `Conteúdo de ${path}`);
    }
  }, 500);
}e