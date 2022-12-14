const generateQuote = async () =>{
    var url="https://type.fit/api/quotes";
  
    const response = await fetch(url);
    const quoteList = await response.json();
    const randomIdx = Math.floor(Math.random()*quoteList.length);
    const quoteText = quoteList[randomIdx].text;
    let authorName = quoteList[randomIdx].author;
    
    if(!authorName) {
      authorName = "Anonymous";
    }
  
    document.getElementById("quote-text").innerHTML="'" + quoteText + "'";
    document.getElementById("quote-author").innerHTML= "~" + authorName +"~";
  }
  
  function changeQuote() {
    generateQuote();
    setInterval(generateQuote, 3000);
  }
  
  changeQuote();
  
  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });  