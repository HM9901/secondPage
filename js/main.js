var slide = $(".TopTour-body")
  slide.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    arrows: true,
    draggable: true,
    dots: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 3,
          infinite: true,
          arrows: false
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });

  var slide = $(".explore-body")
  slide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    arrows: true,
    draggable: true,
    dots: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });

  var slide = $(".travel-body")
  slide.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    draggable: true,
    dots: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });

  