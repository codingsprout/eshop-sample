$(document).ready(function () {
  $('#banner-area .owl-carousel').owlCarousel({
    dots: true,
    items: 1,
  });

  $('#top-sale .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  const $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });

  $('.button-group').on('click', 'button', function () {
    const filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue,
    });
  });

  $('#new-phones .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $('#blogs .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  let qtUp = $('.qty .qty-up');
  let qtDown = $('.qty .qty-down');

  qtUp.click(function (e) {
    let input = $(`.qty_input[data-id='${$(this).data('id')}']`);

    if (input.val() >= 1 && input.val() <= 9) {
      input.val(function (i, oldval) {
        return ++oldval;
      });
    }
  });

  qtDown.click(function (e) {
    const input = $(`.qty_input[data-id='${$(this).data('id')}']`);

    if (input.val() > 1 && input.val() <= 10) {
      input.val(function (i, oldval) {
        return --oldval;
      });
    }
  });
});
