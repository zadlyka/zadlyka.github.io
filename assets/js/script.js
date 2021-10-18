$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

$(document).ready(function () {
  $(".menu-button").click(function () {
    var value = $(this).attr("data-menu");

    if (value == "edex") {
      $("#ed").addClass("animate__animated animate__slideInLeft");
      $("#ex").addClass("animate__animated animate__slideInRight");
    } else if (value == "certif") {
      $("#certif").addClass("animate__animated animate__fadeIn");
    } else if (value == "skill") {
      $("#skill").addClass("animate__animated animate__fadeIn");
    } else if (value == "achiev") {
      $("#achiev").addClass("animate__animated animate__fadeIn");
    } else if (value == "project") {
      $("#projects").addClass("animate__animated animate__fadeIn");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var myOffcanvas = document.getElementById("offcanvasRight");
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});
