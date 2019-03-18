


  //
  // $(".flashcard").click(function(){
  //   $(this).children().toggle();
  // });

  $(document).ready(function(){
    $(function(){
        $(".flashcard").flip({
            axis: 'y',
            trigger: 'click',
            front: '.term',
            back: '.definition'
        });
    });
  // $(".flashcard").click(function(){
  //   $(this).getElementsByClassName("definition").style.transform = "rotateY(0deg)";
  //   $(this).getElementsByClassName("term").style.transform = "rotateY(-180deg)";
  // });
  //
  $("#showAll").click(function(){
    var def = document.getElementsByClassName("definition");
    for (i = 0; i < def.length; i++) {
      def[i].style.transform = "rotateY(0deg)";
    }

    var term = document.getElementsByClassName("term");
    for (i = 0; i < term.length; i++) {
      term[i].style.transform = "rotateY(-180deg)";
    }
  });

  $("#hideAll").click(function(){
    var def = document.getElementsByClassName("definition");
    for (i = 0; i < def.length; i++) {
      def[i].style.transform = "rotateY(180deg)";
    }

    var term = document.getElementsByClassName("term");
    for (i = 0; i < term.length; i++) {
      term[i].style.transform = "rotateY(0deg)";
    }
  });
  // $("#showAll").click(function(){
  //   var def = document.getElementsByClassName("definition");
  //   for (i = 0; i < def.length; i++) {
  //     def[i].style.transform = "rotateY(0deg)";
  //   }
  //
  //   var term = document.getElementsByClassName("term");
  //   for (i = 0; i < term.length; i++) {
  //     term[i].style.transform = "rotateY(-180deg)";
  //   }
  // });
  //
  // $("#hideAll").click(function(){
  //   var def = document.getElementsByClassName("definition");
  //   for (i = 0; i < def.length; i++) {
  //     def[i].style.transform = "rotateY(180deg)";
  //   }
  //
  //   var term = document.getElementsByClassName("term");
  //   for (i = 0; i < term.length; i++) {
  //     term[i].style.transform = "rotateY(0deg)";
  //   }
  // });
});

//
// .flashcard:hover > .term {
//   text-shadow: 0 0 64px #fcc592, 0 0 32px #fcc592, 0 0 16px #fcc592, 0 0 8px #fcc592, 0 0 4px #fcc592, 0 0 2px #fcc592;
//   transform: rotateY(-180deg);
// }
//
// .flashcard:hover > .definition {
//   transform: rotateY(0deg);
// }
