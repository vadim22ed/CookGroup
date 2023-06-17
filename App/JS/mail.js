$(function() {
   $('#search').click(function(){
      $(".menu_item").addClass('hide_item');
      $(".header__search_form").addClass('active');
      $(".close").addClass('active');
      $('#search').hide();
   })
   $(".close").click(function(){
      $(".menu_item").removeClass('hide_item');
      $(".header__search_form").removeClass('active');
      $(".close").removeClass('active');
      $('#search').show();
   })

   window.addEventListener("scroll",function(){
      const header = document.querySelector(".header__top_inner");
      header.classList.toggle("sticky", window.scrollY > 0)
   })
});