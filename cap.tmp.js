const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:1440,height:1000} });
  await p.goto(process.argv[2],{waitUntil:'networkidle'});
  await p.evaluate(()=>document.querySelectorAll('#cc-main,.cc--anim').forEach(e=>e.remove()));
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}});
  await p.waitForTimeout(3000); await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(800);
  await p.screenshot({path:process.argv[3],fullPage:true});
  await b.close();
})();
