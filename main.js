

  const adviceNumber = document.querySelector(".advice-number");
  const adviceText = document.querySelector(".advice-text");
  const dots = document.querySelector('.img-2');
  const num =  document.querySelector('.num');
  const api = 'https://api.adviceslip.com/advice';
  
    
 function getAdvice(){
    fetch(api)
    .then(response=>{
      return response.json();
    })
    .then(data=>{
      const  {id,advice} =  data.slip;
      dots.classList.toggle('animation')
      adviceText.textContent = advice
      num.textContent = id
   })
  }
  
  
  
  
  dots.addEventListener('click',getAdvice)

  
   
 
   


 

