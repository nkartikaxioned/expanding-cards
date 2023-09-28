/* Author: 

*/


const sections = document.querySelectorAll('.section');

  const removeCard = () => {
    sections.forEach((card)=>{
      card.classList.remove('active');
    })
} 

sections.forEach((card) =>{
  console.log('In the Foreach')
  card.addEventListener('click',()=>{
    console.log('AdEventlisener')
    removeCard()
    card.classList.add('active');
  })
 })










