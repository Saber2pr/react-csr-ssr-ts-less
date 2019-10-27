export const createHTML = (inner: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/public/style.min.css" />
    <title>SSR</title>
  </head>
  <body>
    <div id="root">${inner}</div>
    <script src="/public/bundle.min.js"></script>
  </body>
</html>
`
