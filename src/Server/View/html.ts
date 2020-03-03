export default (app: string) => {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Isomorphic React App</title>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
        ${process.env.NODE_ENV === "production" ? `<link rel="stylesheet" href="/style.css">` : ""}
      </head>
    <body>
        <div id="react-app">${app}</div>
        <script type="text/javascript" src="/client.js"></script>
    </body>
  </html>
`;
};
