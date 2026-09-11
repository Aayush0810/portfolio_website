/* =========================================================================
   DUSHYANT KHANNA — site interactions
   - Sticky header scroll state
   - Mobile navigation
   - Scroll reveal animations
   - Stat count-up
   - Contact form validation + demo submit
   ========================================================================= */
(function () {
  "use strict";

  /* ----------  Sticky header  ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    if (window.scrollY > 30) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----------  Mobile nav  ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("nav-open");
      var open = body.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".site-nav-mobile a").forEach(function (a) {
      a.addEventListener("click", function () { body.classList.remove("nav-open"); });
    });
  }

  /* ----------  Scroll reveal  ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ----------  Stat count-up  ---------- */
  var counters = document.querySelectorAll("[data-count]");
  var animateCount = function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-decimals")) ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ----------  Footer year  ---------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ----------  Contact form  ---------- */
  var form = document.getElementById("contact-form");
  if (!form) return;

  var setError = function (field, on) {
    if (!field) return;
    field.classList.toggle("invalid", on);
  };

  var validators = {
    text: function (v) { return v.trim().length >= 2; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
    tel: function (v) { return v.trim().replace(/[^\d]/g, "").length >= 7; },
    select: function (v) { return v !== ""; },
    textarea: function (v) { return v.trim().length >= 10; }
  };

  var validateControl = function (control) {
    var field = control.closest(".field") || control.closest(".consent");
    if (control.type === "checkbox") {
      var ok = control.checked;
      if (control.hasAttribute("required")) setError(field, !ok);
      return ok || !control.hasAttribute("required");
    }
    if (!control.hasAttribute("required")) return true;
    var type = control.getAttribute("data-validate") ||
               (control.tagName === "TEXTAREA" ? "textarea" :
                control.tagName === "SELECT" ? "select" :
                control.type === "email" ? "email" :
                control.type === "tel" ? "tel" : "text");
    var ok = validators[type] ? validators[type](control.value) : control.value.trim() !== "";
    setError(field, !ok);
    return ok;
  };

  form.querySelectorAll("input, select, textarea").forEach(function (c) {
    c.addEventListener("blur", function () { validateControl(c); });
    c.addEventListener("input", function () {
      var field = c.closest(".field");
      if (field && field.classList.contains("invalid")) validateControl(c);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var controls = form.querySelectorAll("[required]");
    var allValid = true;
    var firstInvalid = null;
    controls.forEach(function (c) {
      var ok = validateControl(c);
      if (!ok && !firstInvalid) firstInvalid = c;
      if (!ok) allValid = false;
    });

    if (!allValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    /* -------------------------------------------------------------------
       DEMO SUBMIT — front-end only.
       To receive real enquiries, connect the form to a backend or a
       service such as Formspree / Getform / Basin, e.g.:
         <form action="https://formspree.io/f/XXXX" method="POST">
       and remove the e.preventDefault() short-circuit below.
    ------------------------------------------------------------------- */
    var btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

    setTimeout(function () {
      var success = document.getElementById("form-success");
      form.classList.add("hide");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 700);
  });
})();
