const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  const url = ctx.request.path;
  console.log(url);
  if (url === "/") {
    ctx.response.body = "<h1>INDEX SAYFASINA HOSGELDINIZ</h1>";
    ctx.set("Content-Type", "text/html charset=utf-8");
  } else if (url === "/hakkimda") {
    ctx.response.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>";
    ctx.set("Content-Type", "text/html charset=utf-8");
  } else if (url === "/iletisim") {
    ctx.response.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>";
    ctx.set("Content-Type", "text/html charset=utf-8");
  }
  next();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port da oluşturuldu`);
});
