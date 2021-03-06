const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require('path');
const options = {
    root: path.join(__dirname, '/static'),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    }
};
app
    .prepare()
    .then(() => {
        const server = express();
        server.get("/about", (req, res) => {
            const actualPage = "/about";
            const queryParams = { slug: req.params.slug, apiRoute: "about" };
            app.render(req, res, actualPage, queryParams);
        });
        server.get("/vietnam", (req, res) => {
            const actualPage = "/vietnam";
            const queryParams = { slug: req.params.slug, apiRoute: "vietnam" };
            app.render(req, res, actualPage, queryParams);
        });
        server.get("/people", (req, res) => {
            const actualPage = "/people";
            const queryParams = { slug: req.params.slug, apiRoute: "vietnam" };
            app.render(req, res, actualPage, queryParams);
        });
        server.get("/random", (req, res) => {
            const actualPage = "/random";
            const queryParams = { slug: req.params.slug, apiRoute: "random" };
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/robots.txt', (req, res) => (
            res.status(200).sendFile('robots.txt', options)
        ));
        server.get('/sitemap.xml', (req, res) => (
            res.status(200).sendFile('sitemap.xml', options)
        ));

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
