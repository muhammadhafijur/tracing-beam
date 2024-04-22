document.addEventListener("DOMContentLoaded", function() {
    const scrollLine = document.querySelector('.scroll-line');
    
    window.addEventListener('scroll', function() {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const lineHeight = Math.max(0, Math.min(scrollPercentage, 100)); // Ensure line height is between 0 and 100
      
    //   scrollLine.style.height = `${lineHeight}%`;
      setTimeout(function() {
        scrollLine.style.height = `${lineHeight}%`;
      }, 100);
    });
  });
  


// document.addEventListener("DOMContentLoaded", function() {
//     const scrollLine = document.querySelector('.scroll-line');
    
//     window.addEventListener('scroll', function() {
//       const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//       const lineHeight = Math.max(0, Math.min(scrollPercentage, 100)); // Ensure line height is between 0 and 100
      
//       // Calculate line position and height
//       const lineHeightPx = `${lineHeight}%`;
//       const lineTop = `${(window.scrollY / document.body.scrollHeight) * window.innerHeight}px`;
  
//       // Set line position and height
//       scrollLine.style.height = lineHeightPx;
//       scrollLine.style.top = lineTop;
//     });
//   });


// document.addEventListener("DOMContentLoaded", function() {
//     let prevScrollY = window.scrollY;
  
//     window.addEventListener('scroll', function() {
//       const currentScrollY = window.scrollY;
//       const scrollPercentage = (currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//       const lineHeight = Math.max(0, Math.min(scrollPercentage, 100)); // Ensure line height is between 0 and 100
      

//       const newLine = document.createElement('div');
//       newLine.classList.add('scroll-line');
//       newLine.classList.add('bg-gradient-to-t', 'from-sky-500', 'via-indigo-500', 'to-transparent', 'w-1', 'rounded-b');
      

//       const lineHeightPx = `${lineHeight}%`;
//       const lineTop = `0`; // Start from top of the viewport
//       const lineBottom = `${(lineHeight * window.innerHeight / 100)}px`; 
  

//       newLine.style.height = lineHeightPx;
//       newLine.style.top = lineTop;
//       newLine.style.bottom = lineBottom;
  

//       const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
      

//       if (scrollDirection === 'up') {
//         const newHeight = parseFloat(newLine.style.height) - Math.abs(currentScrollY - prevScrollY);
//         newLine.style.height = `${newHeight}%`;
//       }
  

//       prevScrollY = currentScrollY;
  

//       document.body.appendChild(newLine);
//     });
//   });
  
  
  