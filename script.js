const gnb = document.querySelector('nav')
const nav_bg = document.querySelector('.nav_bg')
const sub = document.querySelectorAll('.sub')
console.log(sub)
for(let i of sub){i.style.height = '0';}
nav_bg.style.height = '0'
setTimeout(() => {
    for(let i of sub){i.style.transition = 'height 0.3s';}
    nav_bg.style.transition = 'height 0.3s'
}, 100);

gnb.addEventListener('mouseover',()=> subShowHide('230px') )
gnb.addEventListener('mouseout',()=> subShowHide() )

const subShowHide = (height='0') => {
    for(let i of sub){i.style.height = height}
    nav_bg.style.height = height
}

//gnb mobile clone
const m_nav = document.querySelector('.m_nav')
const sub_clone = gnb.cloneNode(true)
m_nav.appendChild(sub_clone);

//mobile nav
const m_gnb = m_nav.querySelector('nav')
const m_gnb_li = m_nav.querySelectorAll('.gnb > li')
const m_sub = m_nav.querySelectorAll('.sub')
for(let i of m_sub){i.style.display = 'none'} //모든 서브 숨기기
m_gnb.style.display = 'none'

let boolean = false
/* m_nav.children[0].addEventListener('click',()=>{
    if(boolean){
        boolean = false
        m_gnb.style.display = 'none'
    }else{
        boolean = true
        m_gnb.style.display = 'block'
    }
}) */
m_nav.children[0].addEventListener('click',()=>{
    boolean = !boolean; //첫 클릭 시 true 
    console.log(boolean)
    m_gnb.style.display = boolean ? 'block' : 'none';
})

for(let i of m_gnb_li){
    i.addEventListener('click',function(){
        console.log(this.children[1])
        for(let k of m_sub){k.style.display = 'none'}
        this.children[1].style.display = 'block'
    })
}
