"use strict";

(() => {
  "use strict";

  let e = window.innerWidth - document.body.clientWidth;

  function t() {
    document.body.style.marginRight = e + "px", document.querySelector(".anchor-wrapper").style.display = "none", document.querySelector(".chat-popup").style.display = "none", document.body.classList.add("lock");
  }

  function n() {
    setTimeout(() => {
      document.body.style.marginRight = "0px", document.body.classList.remove("lock"), document.querySelector(".anchor-wrapper").style.display = "", document.querySelector(".chat-popup").style.display = "";
    }, 300);
  }

  window.addEventListener("DOMContentLoaded", () => {
    (function (e) {
      const t = document.querySelectorAll("a"),
            n = document.querySelector(e);
      let o = 0;

      function c(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        const n = document.querySelector(e);
        let o = window.pageYOffset,
            c = n.offsetTop - t - o,
            l = null;
        window.requestAnimationFrame(function e(t) {
          l || (l = t);
          let n = t - l;
          var a, r;
          window.scrollTo(0, (a = n, r = o, -c / 2 * (Math.cos(Math.PI * a / 1e3) - 1) + r)), n < 1e3 && window.requestAnimationFrame(e);
        });
      }

      window.addEventListener("scroll", function () {
        let e = window.pageYOffset,
            t = window.innerHeight,
            c = document.documentElement.scrollHeight;
        document.body.getBoundingClientRect().top > o && e >= t - e || e + t == c ? n.classList.add("anchor-active") : n.classList.remove("anchor-active"), o = document.body.getBoundingClientRect().top;
      }), t.forEach(e => {
        e.addEventListener("click", function (t) {
          let n = e.getAttribute("href");
          e.hasAttribute("data-link") && (t.preventDefault(), c(n)), e.hasAttribute("data-delay") && (t.preventDefault(), setTimeout(() => {
            c(n, 80);
          }, 300));
        });
      });
    })(".anchor-wrapper"), function () {
      const e = document.querySelector(".mobile-wrapper"),
            o = document.querySelector(".burger-btn"),
            c = document.querySelector(".background");
      o.addEventListener("click", () => {
        o.classList.toggle("burger-btn-active"), c.classList.toggle("background-active"), e.classList.toggle("mobile-menu-active"), o.classList.contains("burger-btn-active") ? t() : n();
      }), c.addEventListener("click", t => {
        n(), console.log(t.target), t.target == c && (o.classList.remove("burger-btn-active"), c.classList.remove("background-active"), e.classList.remove("mobile-menu-active"));
      });
    }(), function () {
      const e = document.querySelector(".header-row-Top-right__searchIcon "),
            t = document.querySelector(".header-row-Top-searchField"),
            n = document.querySelector(".header-row-Top-searchInputIcon"),
            o = document.querySelector("input.header-row-Top-input"),
            c = document.querySelector(".header-row-Top-left"),
            l = window.matchMedia("(max-width: 720px)");
      e.addEventListener("click", () => {
        t.classList.toggle("header-searchField__active"), e.classList.toggle("headerSearchIcon__active"), o.focus(), l.matches && c.classList.toggle("header-row-Top-left__hidden");
      }), n.addEventListener("click", () => {
        o.value = "", o.focus();
      });
    }(), function () {
      const e = document.querySelector(".chat-ask__cancel"),
            t = document.querySelector(".chat-ask "),
            n = document.querySelector(".chat-ask__popUpIcon"),
            o = document.querySelector(".formChat"),
            c = document.querySelector(".formChat__cancelIcon");
      n.addEventListener("click", () => {
        o.classList.add("formChat__active");
      }), e.addEventListener("click", () => {
        t.classList.add("chat-ask-hide__active"), e.classList.add("chat-ask-hide__active");
      }), c.addEventListener("click", () => {
        o.classList.remove("formChat__active"), t.classList.remove("chat-ask-hide__active"), e.classList.remove("chat-ask-hide__active");
      });
      const l = document.querySelectorAll(".formChat_input");
      document.querySelector(".formChat__button").addEventListener("click", () => {
        l.forEach(e => {
          e.value = "";
        });
      });
    }(), function () {
      const e = document.querySelectorAll(".h-four__galleryRow"),
            t = document.querySelector(".h-four__buttonPrev"),
            n = document.querySelector(".h-four__buttonNext");
      let o = 1;

      function c(t) {
        t > e.length && (o = 1), t < 1 && (o = e.length), e.forEach(t => {
          t.classList.remove("h-four__galleryRow__show"), e[o - 1].classList.add("h-four__galleryRow__show");
        });
      }

      try {
        n.addEventListener("mousedown", () => {
          c(o += 1);
        }), t.addEventListener("click", () => {
          c(o -= 1);
        });
      } catch (e) {}
    }(), function () {
      const e = document.querySelectorAll(".carousel-preview-item"),
            o = document.querySelector(".carousel-container"),
            c = (document.querySelector(".carousel-wrapper"), document.querySelector(".carousel-main")),
            l = document.querySelector(".slider-row "),
            a = document.querySelector(".button-next"),
            r = document.querySelector(".button-prev"),
            s = document.querySelector(".carousel-cancelBtn");
      let i;
      e.forEach(e => {
        e.addEventListener("click", () => {
          o.classList.add("show-carousel"), i = 1, t();
        });
      });
      let d = -1;

      try {
        a.addEventListener("click", () => {
          i = 0, 1 == d && l.prepend(l.lastElementChild), d = -1, c.style.justifyContent = "flex-start", l.style.transform = "translate(-20%)";
        }), r.addEventListener("click", () => {
          i = 0, -1 == d && l.append(l.firstElementChild), d = 1, c.style.justifyContent = "flex-end", l.style.transform = "translate(20%)";
        }), l.addEventListener("transitionend", () => {
          0 == i && (-1 == d ? l.append(l.firstElementChild) : (l.prepend(l.lastElementChild), console.log("Prepend3")), l.style.transition = "none", l.style.transform = "translate(0)", setTimeout(() => {
            l.style.transition = "all .5s ease";
          }));
        }), s.addEventListener("click", () => {
          n(), o.classList.remove("show-carousel");
        }), o.addEventListener("click", e => {
          e.target == o && (n(), o.classList.remove("show-carousel"));
        });
      } catch (e) {}
    }(), function (e, t) {
      const n = document.querySelector(".h-seven__formRow"),
            o = document.querySelectorAll(".h-seven__input");
      n.addEventListener("submit", e => {
        e.preventDefault();
        let t = 0;
        o.forEach(e => {
          if (e.value.length > 0 && (t++, t == o.length)) {
            n.lastElementChild.classList.remove("active-warn"), n.lastElementChild.classList.add("active-form"), n.lastElementChild.innerHTML = "Подписка!";
            const e = new FormData(n);
            fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
              method: "POST",
              body: e
            }), setTimeout(() => {
              n.reset();
            }, 1500);
          }
        }), o.forEach(e => {
          0 == e.value.length && (n.lastElementChild.innerHTML = "ваш email?", n.lastElementChild.classList.add("active-warn"));
        }), n.addEventListener("input", e => {
          e.preventDefault(), n.lastElementChild.classList.remove("active-form"), n.lastElementChild.classList.remove("active-warn"), n.lastElementChild.innerHTML = "подписаться";
        });
      });
    }(), function (e, t, n) {
      const o = document.querySelector("form[data-form]"),
            c = document.querySelectorAll(".bi-three__input"),
            l = document.querySelector(".bi-three__textarea");

      try {
        o.addEventListener("submit", e => {
          e.preventDefault();
          let t = 0;
          c.forEach(e => {
            if (e.value.length > 0 && l.value.length > 0 && (t++, t == c.length)) {
              o.lastElementChild.classList.remove("active-warn"), o.lastElementChild.classList.add("active-form"), o.lastElementChild.innerHTML = "сообщение отправлено";
              const e = new FormData(o);
              fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
                method: "POST",
                body: e
              }), setTimeout(() => {
                o.reset();
              }, 1500);
            }
          }), c.forEach(e => {
            0 != e.value.length && 0 != l.value.length || (o.lastElementChild.innerHTML = "заполните все поля", o.lastElementChild.classList.add("active-warn"));
          }), o.addEventListener("input", e => {
            e.preventDefault(), o.lastElementChild.classList.remove("active-form"), o.lastElementChild.classList.remove("active-warn"), o.lastElementChild.innerHTML = "отправить сообщение";
          });
        });
      } catch (e) {}
    }();
  });
})();