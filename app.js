const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;
const timeline = gsap.timeline({repeat:-1});

timeline.from('.red', {
    x: -200,
    y: -200,
  })
  .from('.green', {
    x: 200,
    y: -200,
  }) 
  .from('.blue', {
    x: 200,
    y: 200,
  })
  .from('.yellow', {
    x: -200,
    y: 200,
  });
  
timeline.to('.red', {
      x: fullWidth - 200,
      y: 0, 
      borderRadius: "50%",
      backgroundColor: "green",
      duration: 1,
  })
  .to('.green', {
      x: 0, 
      y: fullHeight - 200, 
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
  }, "<")
  .to('.blue', {
      x: -fullWidth + 200, 
      y: 0,
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
  }, "<")
  .to('.yellow', {
      x: 0,
      y: -fullHeight + 200,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
  }, "<");

    
timeline.to('.red', {
      x: +2000,
      borderRadius: "50%",
      backgroundColor: "green",
      duration: 2,
  },)
  .to('.green', {
      x: +2000,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 2,
  }, "<")
  .to('.blue', {
      x: -2000, 
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 2,
  }, "<")
  .to('.yellow', {
      x: -2000,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 2,
  }, "<");