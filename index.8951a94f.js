const e=document.querySelector("#main-timer"),t=document.querySelector('[data-value="days"]'),o=document.querySelector('[data-value="hours"]'),a=document.querySelector('[data-value="mins"]'),n=document.querySelector('[data-value="secs"]');const r=e=>({days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)});new class{remainingTime(){e.firstElementChild.setAttribute("id",this.selector),setInterval((()=>{const e=Date.now(),t=this.targetDate-e,o=r(t);this.onTick(o)}),1e3)}constructor({onTick:e,selector:t,targetDate:o}){this.onTick=e,this.selector=t,this.targetDate=o}}({onTick:({days:e,hours:r,mins:s,secs:c})=>{t.textContent=`${e}`,o.textContent=`${r}`,a.textContent=`${s}`,n.textContent=`${c}`},selector:"#timer-1",targetDate:new Date("Jul 17, 2023")}).remainingTime();
//# sourceMappingURL=index.8951a94f.js.map