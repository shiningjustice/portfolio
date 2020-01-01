const portfolio = (() => {

  //Render functions
  const render = () => {
    console.log('render ran');
    renderMainHtml();
  };

  const renderMainHtml = () => {
    $('.replaceForMainHtml').html(`
      <div class="portfolioContainer">
        <section id="about" class="Main__section about">
          <div class="intro">
            <h2 class="intro">
              <span class="g1">h</span><span class="g2">e</span><span class="g3">l</span><span class="g4">l</span><span class="g5">o</span>
              <span class="g6"> </span>
              <span class="g7">w</span><span class="g8">o</span><span class="g9">r</span><span class="g10">l</span><span class="g11">d</span>
            </h2>
            <h3 class="intro secondaryFont" id="h3Intro"><span class="notBold">I'm</span> Phoebe Law</h3>
          </div>
          <p class="notIntro">I'm a Junior Full-stack Javascript Developer driven by creativity and excellence. I love making beautifully functional (and functionally beautiful) things. </p>
          <p class="notIntro">When I'm not coding or trying to describe myself I spend time with people I love, climb, or pick something to do from a myriad of hobbies. I also wear lots of deodorant.</p>

        </section>
        <section id="projects" class="Main__section projects notIntro">
          <h2>Projects</h2>
          <div class="replaceForProjects"></div>
          </p>
        </section>
        <section id="contact" class="Main__section contact notIntro">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <ul class="contact__ul">
            <li></li>
            <li><a href="https://refer.nativecos.com/x/RFpw36" title="This is embarassing but if you have BO, this is the place to go!">Deodorant</a></li>          
          <ul>
        </section>
      </div>
    `)
  };

  const renderProjects = () => {
    // Format skills 
    const projectsArr = [];
    store.projects.forEach(project => {
      const { name, subtitle, imageUrl, description, skillsApplied, liveSiteUrl, clientGithubUrl } = project;

      const html = (
        <div class="Project__div">
          <h3>${name}: ${subtitle}</h3>
          <img src="${imageUrl}" alt="A screenshot of Phoebe's ${name} project"></img>
          <div>${skills}</div>
          <a href="${liveSiteUrl}">View live site</a>
          <a href="${clientGithubUrl}">View client repository</a>
          {/* If full stack app, also display server repo */}
          ${(serverGithubUrl && <a href="${serverGithubUrl}">View server repository</a>)}
        </div>
      );
      projectsArr.push(html);
    })
  };


  // Event handler and listener functions
  const setAllHandlersAndListeners = () => {
    onClickLightSwitch();
    hideIntroOnlyItems();
  };

  const onClickLightSwitch = () => {
    $('.body').on('click', '.lightSwitch', () => {
      console.log($('.body').css('background-color'));
      if ($('.body').css('background-color') === "rgba(0, 0, 0, 0)" || $('.body').css('background-color') === "rgb(0, 0, 0)")  {
        console.log('was black');
        $('.body').css({"background-color": "white", "color": "black"})
      } else {
        console.log('was white');
        $('.body').css({"background-color": "#252525", "color": "whitesmoke"})
      }
    })
  };

  const hideIntroOnlyItems = () => {
    setTimeout(() => {
      const introOnlyItems = document.getElementById('h3Intro');

      introOnlyItems.classList.toggle('hidden');
    }, 7000)
  }

  // Return function
  return {
    render,
    setAllHandlersAndListeners
  };
})();