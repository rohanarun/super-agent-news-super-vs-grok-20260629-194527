(function(){
  function ready(fn){ if(document.readyState!=='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    if(window.gsap){
      gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
      gsap.from('.hero-actions .btn', { y: 10, opacity: 0, stagger: 0.1, delay: 0.2, ease: 'power3.out' });
    }
  });
})();