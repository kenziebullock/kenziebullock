$( document ).ready(() => {
  console.log('doc ready');
  $('.projects').mouseover(() => {
    // console.log('works');
    $('.project-stack').css("display", "block")
  }).mouseleave(() => {
    // console.log('yup')
    $('.project-stack').css("display", "none")
  })
})
