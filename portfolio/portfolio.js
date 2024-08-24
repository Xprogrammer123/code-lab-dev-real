let but = document.querySelector('.menu-icon');
let nav = document.querySelector('.navbar-side');
let show = document.querySelector('.unactive');
let menu = document.querySelector('.menu-icon');

function showSideBar() {
    if(nav == show) {
 nav.style.opacity = '0'
    }
else {
    nav.style.opacity = '1'

}

}

function closeSidebar() {
  if(nav == show) {
    nav.style.opacity = '1'
       }
   else {
       nav.style.opacity = '0'
   }
}





        // script.js 

        let icon = { 
          success: 
          '<span class="material-symbols-outlined">task_alt</span>', 
          danger: 
          '<span class="material-symbols-outlined">error</span>', 
          warning: 
          '<span class="material-symbols-outlined">warning</span>', 
          info: 
          '<span class="material-symbols-outlined">info</span>', 
        }; 
        
        const showToast = ( 
          message = "Sample Message", 
          toastType = "info", 
          duration = 5000) => { 
          if ( 
            !Object.keys(icon).includes(toastType)) 
            toastType = "info"; 
        
          let box = document.createElement("div"); 
          box.classList.add( 
            "toast", `toast-${toastType}`); 
          box.innerHTML = ` <div class="toast-content-wrapper"> 
                  <div class="toast-icon"> 
                  ${icon[toastType]} 
                  </div> 
                  <div class="toast-message">${message}</div> 
                  <div class="toast-progress"></div> 
                  </div>`; 
          duration = duration || 5000; 
          box.querySelector(".toast-progress").style.animationDuration = 
              `${duration / 1000}s`; 
        
          let toastAlready = 
            document.body.querySelector(".toast"); 
          if (toastAlready) { 
            toastAlready.remove(); 
          } 
        
          document.body.appendChild(box)}; 
        
        let submit = 
          document.querySelector(".custom-toast.success-toast"); 
        let information = 
          document.querySelector(".custom-toast.info-toast"); 
        let failed = 
          document.querySelector(".custom-toast.danger-toast"); 
        let warn = 
          document.querySelector(".custom-toast.warning-toast"); 
        
        submit.addEventListener("click",(e) => { 
            e.preventDefault(); 
            showToast("The Main Page Checking Contents.....","success",5000); 
             window.location.href = "#home"
          }); 
        
        information.addEventListener("click",(e) => { 
            e.preventDefault(); 
            showToast("Know More About Me Loading.......","info",5000); 
              window.location.href = "#about"
          }); 
        
        failed.addEventListener("click",(e) => { 
            e.preventDefault(); 
            showToast("See My Stack , My Skills........","danger",5000); 
              window.location.href = "#skills"
          }); 
        
        warn.addEventListener("click", (e) => { 
          e.preventDefault(); 
          showToast("My Projects Loading Content........","warning",5000); 
           window.location.href = "#portfolio"
        });
        





















