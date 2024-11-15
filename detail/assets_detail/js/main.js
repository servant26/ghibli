/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
   const sections = document.querySelectorAll(".hidden");

   const observer = new IntersectionObserver(
      (entries, observer) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add("fade-in");
            } else {
               entry.target.classList.remove("fade-in"); // Agar animasi diputar lagi saat kembali
            }
         });
      },
      { threshold: 0.1 } // Triggers saat 10% elemen terlihat
   );

   sections.forEach(section => {
      observer.observe(section);
   });
});


document.addEventListener("DOMContentLoaded", () => {
    const previewTriggers = document.querySelectorAll('.preview-trigger');
    const modal = document.querySelector('.preview-modal');
    const modalImage = document.querySelector('.preview-img-lg');
    const closeBtn = document.querySelector('.close');

    // Event listener untuk setiap gambar yang diklik
    previewTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const imgSrc = this.src; // Mendapatkan src gambar yang diklik
            modal.classList.add('active'); // Tambahkan kelas active untuk menampilkan modal
            modalImage.src = imgSrc; // Tampilkan gambar di modal
        });
    });

    // Menutup modal saat tombol close diklik
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('active'); // Hilangkan kelas active untuk menyembunyikan modal
    });

    // Menutup modal jika pengguna mengklik di luar gambar
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active'); // Hilangkan kelas active untuk menyembunyikan modal
        }
    });
});
