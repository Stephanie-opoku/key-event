const text = document.querySelector('#textbox')
const res = document.querySelector('#output')
text.addEventListener('keydown',(e)=>{
 res.textContent =`'you pressed a' ${e.key}`
})