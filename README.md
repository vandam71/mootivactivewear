# mootivactivewear.github.io
Mootiv Active Wear fictitious brand website

Local testing
-
To run the site locally (recommended — do not open HTML files directly because fetch requests require an HTTP server):

1. Using Python 3 (simple):

```bash
./serve_docs.sh 8000
# then open http://localhost:8000
```

2. Alternative with Node (no install required if you have npm/npx):

```bash
npx http-server docs -p 8000 -c-1
# then open http://localhost:8000
```

Notes:
- The server root should be the `docs/` folder so paths like `products.json` and `includes/*` load correctly.
- Use `shop.html?filter=new` or `shop.html?gender=women` to test filtering behavior.

