const html = `<!DOCTYPE html>
<head>
<meta content='width=device-width,minimum-scale=1,initial-scale=1' name='viewport'/>
</head>
<body style=" background: #fff; ">
<div style=" margin: 0 auto; max-width: 1000px; text-align: center; padding-top: 100px; color: #111; ">
<div style=" font-family: Arial,Helvetica,sans-serif; font-size: 50px; ">Oops, You're Offline!</div>
<div style=" font-family: Georgia,'Times New Roman',serif; font-size: 20px; padding-top: 40px; ">It looks like your network connection isn't working right now.</div>
</div> </body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
