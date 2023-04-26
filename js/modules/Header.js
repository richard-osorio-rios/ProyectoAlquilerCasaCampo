const header = () => {
    //const navThemeButton = document.getElementById('navThemeButton');
    const navActionMenu  =  document.getElementById('navActionMenu');
    const navActionClose = document.getElementById('navActionClose');
    const menu__link = document.querySelectorAll('.menu__link');

    const toggleTheme = () => {
      const body = document.querySelector('.body');
      body.classList.toggle('body--light');
      //navThemeButton.classList.toggle('nav__action--theme-active');
    };

    const openMenu = ()=>{
      const nav =  document.querySelector('.nav');
      nav.classList.add('nav--open');
    }

    const closeMenu = ()=>{
      const nav = document.querySelector('.nav');
      nav.classList.remove('nav--open');
    }
  
    //navThemeButton.addEventListener('click', toggleTheme);
    navActionMenu.addEventListener('click',openMenu);
    navActionClose.addEventListener('click',closeMenu);
    menu__link.forEach((element)=>{
      element.addEventListener('click',closeMenu);
    });
  };
  
  export default header;