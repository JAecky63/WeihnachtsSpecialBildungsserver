const html=document.getElementById('htmlCode'), css=document.getElementById('cssCode'), preview=document.getElementById('preview');
const initialHTML=`<h1>Frohe Weihnachten!</h1>
<p>Ich wünsche dir schöne Feiertage!</p>
<i class="fa-solid fa-gift" style="font-size: 70px; color: gold;"></i>`;
const initialCSS=`body {
  background-color: #286b92;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 30px;
}
h1 { color: gold; font-size: 36px; }`;
function documentText(){return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Meine Weihnachtskarte</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
${css.value}
  </style>
</head>
<body>
${html.value}
</body>
</html>`;}
function render(){preview.srcdoc=documentText();}
function reset(){html.value=initialHTML;css.value=initialCSS;render();}
html.addEventListener('input',render);css.addEventListener('input',render);
document.getElementById('reset').addEventListener('click',()=>{if(confirm('Deine Änderungen durch das ursprüngliche Beispiel ersetzen?'))reset();});
document.getElementById('save').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([documentText()],{type:'text/html;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='MeineWeihnachtskarte.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});reset();
