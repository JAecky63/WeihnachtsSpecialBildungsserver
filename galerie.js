const $ = id => document.getElementById(id);
function update(){
 const name=$('motif').value, color=$('color').value, size=$('size').value, rotation=$('rotation').value;
 const icon=$('previewIcon'); icon.className='fa-solid fa-'+name;
 const style=`font-size: ${size}px; color: ${color}; transform: rotate(${rotation}deg);`;
 icon.style.cssText=style;
 $('sizeValue').textContent=size; $('rotationValue').textContent=rotation;
 $('iconCode').textContent=`<i class="fa-solid fa-${name}" style="${style}" aria-hidden="true"></i>`;
}
for(const id of ['motif','color','size','rotation']) $(id).addEventListener('input',update);
$('copyIcon').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('iconCode').textContent); $('copyStatus').textContent='Kopiert.';}catch{ $('copyStatus').textContent='Bitte markiere den Code und kopiere ihn mit Strg+C.'; }}); update();
