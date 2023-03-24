const jsFiles = [
  { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6282199409024765', async: 'true', crossorigin: 'anonymous' },
  { src: 'https://kasworld-aero.github.io/home/js/cdn/main.js', defer: 'true'},
  { src: 'https://kasworld-aero.github.io/cdn/js/servicead.js', defer: 'true'},
  { src: '//platform-api.sharethis.com/js/sharethis.js#property=5ad9757d22309d0013d4efc3&product=sticky-share-buttons', async: 'true' },
{ src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'},
{ src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js', async: 'true'},
{ src: 'https://www.googletagmanager.com/gtag/js?id=UA-131561064-1', async: 'true'},
{ src: 'https://www.googletagmanager.com/gtag/js?id=G-3DJHN7NEP3', async: 'true'},
{ src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', async: 'true'},
  { src: 'https://example.com/script1.js'},
  { src: 'https://example.com/script4.js', crossorigin: 'anonymous' }
];

if (!localStorage.getItem('jsFiles')) {
  localStorage.setItem('jsFiles', JSON.stringify(jsFiles));
}


if (!localStorage.getItem('jsFiles')) {
  const jsFileso = JSON.parse(JSON.stringify(jsFiles));
  jsFileso.forEach(file => {
    const scriptElement = document.createElement('script');
    scriptElement.src = file.src;
    if (file.defer) {
      scriptElement.defer = true;
    } else if (file.async) {
      scriptElement.async = true;
    }
    if (file.crossorigin) {
  scriptElement.crossOrigin = file.crossorigin;
    
    }
    document.head.appendChild(scriptElement);
  });
}
