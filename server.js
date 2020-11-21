
const nav__btn=document.querySelector('.nav__btn')
const navbar__collapse=document.querySelector('.collapse')
const navbar_icon=document.querySelector('.navbar-toggler-icon')
const nav__toggler=()=>{
  const navbar_icon=document.querySelector('.navbar-toggler-icon')
   nav__btn.addEventListener('click',()=>{
       navbar__collapse.classList.toggle('collapse')
       navbar__collapse.classList.toggle('nav--show')
       navbar_icon.classList.toggle('navbar-toggler-icon')
       navbar_icon.classList.toggle('cut-show')
   })
}
window.onresize=()=>{
  
    if(screen.width>768){
        navbar__collapse.classList.add('collapse')
        navbar__collapse.classList.remove('nav--show')

    }
    
}
const video_player=()=>{
    if (Hls.isSupported()) {
      const video=document.getElementById('intro__video')
      video.setAttribute("width","320")
      video.setAttribute("height","240")
      const hls=new Hls()
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            let isplay=false
           const button_container=document.querySelector('.video__buttons')
        video.addEventListener('mouseover',()=>{
            button_container.classList.add('show-button')
        })
        video.addEventListener('mouseleave',()=>{
            button_container.classList.remove('show-button')
        })
            video.addEventListener('click',()=>{
                if(!isplay){
                    video.play()
                    button_container.innerHTML=`<figure class="play__button">
                    <img class="play__button__img" src="/img/pause__button.png"/>
                    </figure>`
                    isplay=true   
                
                }else{
                    video.pause()
                    button_container.innerHTML=`<figure class="play__button">
                    <img class="play__button__img" src="/img/play__button.png"/>
                    </figure>`
                    isplay=false
                }
                
            })
        
        });
      
      });
      }
     
}
const facts_animation=()=>{
    const facts_details_clippath=document.querySelectorAll('.facts__details__clippath')
    const facts_details_circle=document.querySelectorAll('.facts__details_circle')
     facts_details_circle.forEach(facts=>{
         facts.addEventListener('mouseenter',()=>{
             
             facts.lastChild.previousSibling.style.width="11em";
             facts.lastChild.previousSibling.style.height="11em";
             facts.lastChild.previousSibling.style.left="8%"
            
         })
         facts.addEventListener('mouseleave',()=>{
             
            facts.lastChild.previousSibling.style.width="0em";
            facts.lastChild.previousSibling.style.height="0em";
            facts.lastChild.previousSibling.style.left="35%"
           
        })
     })

  

}
nav__toggler()
video_player()
facts_animation()
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })