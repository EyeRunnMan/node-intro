#!/usr/bin/node

import { createReadStream, readFile } from "fs";
import { createServer } from "http";

const port = 8000;

createServer(async (req, res) => {
   if (req.url == "/index" || req.url == "/") {
      createReadStream("./pages/index.html").pipe(res);
   } else if (req.url == "/contact-me") {
      createReadStream("./pages/contact-me.html").pipe(res);
   } else if (req.url == "/about") {
      createReadStream("./pages/about.html").pipe(res);
   } else {
      createReadStream("./pages/404.html").pipe(res);
   }
}).listen(port); //the server object listens on port 8080
