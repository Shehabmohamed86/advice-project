

  const adviceNumber = document.querySelector(".advice-number");
  const adviceText = document.querySelector(".advice-text");
  const dots = document.querySelector('.img-2');
  const num =  document.querySelector('.num');
  const api = 'https://api.adviceslip.com/advice';
  fetch(api)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
     console.log(data)
     const {id,advice} =  data.slip;
     dots.addEventListener('click',()=>{
      dots.classList.toggle('animation')
      adviceText.textContent = advice
      reload()

     })
     dots.addEventListener('click',()=>{
      num.textContent = id
     })
  
  })

  function reload(){
    dots.addEventListener('click',()=>{
      window.location.reload()
    })
  }
 
   


 

