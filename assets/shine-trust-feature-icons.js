!function(e){var t="feature-icon",n={};let o=setInterval((()=>{window.STBASE&&(window.STBASE.getShopURL()&&(window.STBASE.renderWrapper(),async function(){let e=window.STBASE.getTemplate(),n=window.STBASE.apiUrl+t,o={shop:window.STBASE.getShopURL(),template:e};"product"===e&&void 0!==typeof meta&&(o.productID=meta.product.gid),await fetch(n,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>e.json())).then((async({data:e,css:t})=>{l={data:e,cssDefault:t},r()}))}().then((e=>console.info("[ST] loaded Feature icons")))),clearInterval(o))}),5);let l={};async function r(){const{data:t,cssDefault:o}=l;let r=[],a=o||"";var s;t.length&&(t.map(((t,o)=>{["main","sub"].map((e=>{""!==t?.fonts[e]?.name&&r.push({font:t?.fonts[e]?.name,weight:t?.fonts[e]?.weight})}));const l=e.createElement("div");l.innerHTML=t.html,Object.keys(t?.mapping).map((e=>{l.querySelector(e).innerText=window.STBASE.translate(t?.mapping[e])})),a+=t.css;let{id:s=null,selector:{element:i,page:d=""}}=t;if("block"===d){let t=e.querySelectorAll(".shine-feature-icon:not(.shine-show)");for(let e=0;e<t.length;e++){if((t[e].getAttribute("data-id")||"")===s){let n=l.cloneNode(!0);n.classList.add("st-order-"+e),t[e].innerHTML="",t[e].appendChild(n),t[e].classList.add("shine-show")}}}else if(""===i){let t=e.querySelectorAll(".st-render-wrapper");if(t.length)for(var c=0;c<t.length;c++){let e=l.cloneNode(!0);e.classList.add("st-order-"+c),t[c].appendChild(e)}}else{let r=e.querySelectorAll(i);const a=t.selector?.position?t.selector?.position:"below";if(r.length)for(c=0;c<r.length;c++){let e=l.cloneNode(!0);e.classList.add("st-order-"+c),"above"===a?r[c].parentNode.insertBefore(e,r[c]):r[c].parentNode.insertBefore(e,r[c].nextSibling)}else n[o]={selector:t.selector.element,position:a,html:l}}})),window.STBASE.loadFont(r,"custom-google-font-feature-icon"),s=setInterval((function(){Object.keys(n).length?Object.keys(n).map((t=>{let o=n[t];const l=e.querySelectorAll(o.selector),r=o.position;if(l.length){for(var a=0;a<l.length;a++)"above"===r?l[a].parentNode.insertBefore(o.html,l[a]):l[a].parentNode.insertBefore(o.html,l[a].nextSibling);delete n[t]}})):clearInterval(s)}),3e3)),window.STBASE.addStyle(a)}window.addEventListener("ST:add",(t=>{let n=e.querySelectorAll(".feature-icon");if(n.length)for(let e=0;e<n.length;e++)n[e].remove();r()}))}(document);