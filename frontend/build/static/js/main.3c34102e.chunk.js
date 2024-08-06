(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{124:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),o=a(76),r=a.n(o),s=(a(89),a(28)),i=a(9),l=a(78),d=a(152),h=a(154),j=a(151),p=a(155),b=a(153),m=a(79),f=a.p+"static/media/LV.5d5908e0.jpg",u=a.p+"static/media/chanel.367af1cd.jpg",y=a.p+"static/media/prada.69dbca75.jpg",O=a(2);const g=Object(m.a)("div")({position:"relative",height:"70vh",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}),v=Object(m.a)("img")({width:"33.33%",height:"100%",objectFit:"cover"}),x=Object(m.a)("div")({position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",background:"rgba(0, 0, 0, 0.4)",textAlign:"center"}),k=Object(m.a)(h.a)((t=>{let{theme:e}=t;return{marginTop:e.spacing(4),display:"flex",justifyContent:"center"}})),S=Object(m.a)(j.a)((t=>{let{theme:e}=t;return{margin:e.spacing(2),backgroundColor:"#000",color:"#fff","&:hover":{backgroundColor:"#333"}}})),_=Object(m.a)(p.a)((t=>{let{theme:e}=t;return{fontFamily:"serif",fontWeight:700,textTransform:"uppercase"}}));var E=()=>Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(g,{children:[Object(O.jsx)(v,{src:f,alt:"Louis Vuitton"}),Object(O.jsx)(v,{src:u,alt:"Chanel"}),Object(O.jsx)(v,{src:y,alt:"Prada"}),Object(O.jsxs)(x,{children:[Object(O.jsx)(_,{variant:"h2",gutterBottom:!0,children:"View the Official NYFW"}),Object(O.jsx)(_,{variant:"h3",children:"September 2024 Schedule"})]})]}),Object(O.jsxs)(k,{children:[Object(O.jsx)(s.b,{to:"/stock-analysis",style:{textDecoration:"none"},children:Object(O.jsx)(S,{variant:"contained",size:"large",children:"Stock Analysis"})}),Object(O.jsx)(s.b,{to:"/event-analysis",style:{textDecoration:"none"},children:Object(O.jsx)(S,{variant:"contained",size:"large",children:"Event Analysis"})})]})]}),C=a(23),F=a.n(C),P=a(30),A=a.n(P);var w=()=>{const[t,e]=Object(c.useState)([]),[a,n]=Object(c.useState)(""),[o,r]=Object(c.useState)(null),[s,l]=Object(c.useState)([]),d=Object(i.f)();Object(c.useEffect)((()=>{F.a.get("http://localhost:5000/api/stock-tickers").then((t=>{e(t.data)})).catch((t=>{console.error("Error fetching tickers:",t)}))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:()=>d.goBack(),children:"Back"}),Object(O.jsx)("h1",{children:"Stock Analysis"}),Object(O.jsxs)("select",{value:a,onChange:t=>{const e=t.target.value;n(e),F.a.get("http://localhost:5000/api/stock-data/".concat(e)).then((t=>{r(t.data)})).catch((t=>{console.error("Error fetching stock data:",t)})),F.a.get("http://localhost:5000/api/stock-forecast/".concat(e)).then((t=>{Array.isArray(t.data)?l(t.data):(console.error("Unexpected response format for forecast data:",t.data),l([]))})).catch((t=>{console.error("Error fetching forecast data:",t)}))},children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Select a stock ticker"}),t.map((t=>Object(O.jsxs)("option",{value:t.stock_symbol,children:[t.company_name," (",t.stock_symbol,")"]},t.stock_symbol)))]}),o&&Object(O.jsx)(A.a,{data:[{x:o.map((t=>t.date)),y:o.map((t=>t.close_price)),type:"scatter",mode:"lines+markers",marker:{color:"blue"},name:"Historical Prices"}],layout:{title:"Stock Prices for ".concat(a)}}),s.length>0&&Object(O.jsx)(A.a,{data:[{x:s.map((t=>t.forecast_date)),y:s.map((t=>t.forecast_price)),type:"scatter",mode:"lines+markers",marker:{color:"red"},name:"Forecasted Prices"}],layout:{title:"Forecasted Prices for ".concat(a)}})]})};var B=()=>{var t,e,a;const[n,o]=Object(c.useState)([]),[r,s]=Object(c.useState)(""),[l,d]=Object(c.useState)([]),[h,j]=Object(c.useState)([]),[p,b]=Object(c.useState)([]),m=Object(i.f)();Object(c.useEffect)((()=>{F.a.get("http://localhost:5000/api/event-names").then((t=>{o(t.data)})).catch((t=>{console.error("Error fetching events:",t)}))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:()=>m.goBack(),children:"Back"}),Object(O.jsx)("h1",{children:"Event Analysis"}),Object(O.jsxs)("select",{value:r,onChange:t=>{const e=t.target.value;s(e),F.a.get("http://localhost:5000/api/event-impacts/".concat(e)).then((t=>{d(t.data)})).catch((t=>{console.error("Error fetching event impact data:",t)})),F.a.get("http://localhost:5000/api/event-sentiment-scores/".concat(e)).then((t=>{j(t.data)})).catch((t=>{console.error("Error fetching event sentiment scores:",t)})),F.a.get("http://localhost:5000/api/event-average-impact-graph/".concat(e)).then((t=>{b(t.data)})).catch((t=>{console.error("Error fetching event average impact data:",t)}))},children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Select an event"}),n.map((t=>Object(O.jsx)("option",{value:t.id,children:t.description},t.id)))]}),l.length>0&&Object(O.jsx)(A.a,{data:(()=>{const t=[],e=l.reduce(((t,e)=>((t[e.stock_symbol]=t[e.stock_symbol]||[]).push(e),t)),{});for(const a in e){const c=e[a];t.push({x:c.map((t=>t.event_date)),y:c.map((t=>t.impact)),type:"scatter",mode:"lines+markers",name:a})}return t})(),layout:{title:"Event Impact Scores for ".concat(null===(t=n.find((t=>t.id===r)))||void 0===t?void 0:t.description)}}),h.length>0&&Object(O.jsx)(A.a,{data:(()=>{const t=[],e=h.reduce(((t,e)=>((t[e.stock_symbol]=t[e.stock_symbol]||[]).push(e),t)),{});for(const a in e){const c=e[a];t.push({x:c.map((t=>t.event_date)),y:c.map((t=>t.sentiment_score)),type:"scatter",mode:"lines+markers",name:a})}return t})(),layout:{title:"Event Sentiment Scores for ".concat(null===(e=n.find((t=>t.id===r)))||void 0===e?void 0:e.description)}}),p.length>0&&Object(O.jsx)(A.a,{data:p.map((t=>({x:[t.stock_symbol],y:[t.average_impact],type:"bar",name:t.stock_symbol}))),layout:{title:"Event Average Impact for ".concat(null===(a=n.find((t=>t.id===r)))||void 0===a?void 0:a.description)}})]})};const D=Object(l.a)({palette:{primary:{main:"#000"},secondary:{main:"#d4af37"}},typography:{fontFamily:"Raleway, Arial",h1:{fontFamily:"Playfair Display, serif"},h2:{fontFamily:"Playfair Display, serif"},h3:{fontFamily:"Playfair Display, serif"}}});var I=function(){return Object(O.jsx)(d.a,{theme:D,children:Object(O.jsx)(s.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",exact:!0,component:E}),Object(O.jsx)(i.a,{path:"/stock-analysis",component:w}),Object(O.jsx)(i.a,{path:"/event-analysis",component:B})]})})})})};var L=t=>{t&&t instanceof Function&&a.e(3).then(a.bind(null,156)).then((e=>{let{getCLS:a,getFID:c,getFCP:n,getLCP:o,getTTFB:r}=e;a(t),c(t),n(t),o(t),r(t)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),L()},89:function(t,e,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.3c34102e.chunk.js.map