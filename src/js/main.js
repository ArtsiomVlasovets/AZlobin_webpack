$(document).ready(function () {
  $(function () {
    // $('.slider-items').slick({
    //   infinite: true,
    //   slidesToShow: 2,
    //   dots: true,
    //   slidesToScroll: 2,
    //   arrows: true
    // });

    $('.slider-items').slick({
      dots: true,
      responsive: [{

        breakpoint: 490,
        settings: {
          dots: false
        }
      },]

    });
    $('.popular-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      responsive: [{

        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }

      }, {

        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }

      }]
    });
  });

});
document.getElementById('burger-logo').onclick = function () {
  let burger = document.getElementById('burger-menu');
  burger.classList.toggle('active');
}

const cartInit = () => {
  const cnt = document.querySelector('.cart-counter')
  cnt.innerHTML = localStorage.getItem('counter') || 0
}
cartInit()
document.querySelectorAll('.price-btn')

  .forEach(function (el) {
    el.onclick = function () {
      const cnt = document.querySelector('.cart-counter')
      let cntr = cnt.innerHTML = parseInt(cnt.innerHTML, 10) + 1;
      localStorage.setItem('counter', cntr);
      cartInit()
    };
  });
