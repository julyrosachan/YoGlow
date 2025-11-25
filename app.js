$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

   // ===============================
    // 1. Günün sözləri listi
    // ===============================
    const quotes = [
      "Sakitlik səsin yoxluğunda deyil, düşüncənin sakitliyində gizlidir.",
      "Daha az et, daha çox ol.",
      "Balans tapmaq deyil, yaratmaqdır.",
      "Nəfəsin — indinin körpüsüdür.",
      "Bədən dayananda, zehn danışmağa başlayır.",
      "İndi – sənin yeganə evindir.",
      "Hər şey olduğu kimi kifayətdir."
    ];

    // ===============================
    // 2. Günə görə indeks hesablayırıq
    // Hər gün fərqli söz çıxacaq
    // ===============================
    const today = new Date();
    // getDate() 1-31 verir, quotes.length ilə modulo almaq lazımdır
    const index = today.getDate() % quotes.length;
    const todayQuote = quotes[index];

    // ===============================
    // 3. HTML-ə söz əlavə edirik
    // ===============================
    const quoteContainer = document.getElementById("quote-text");
    quoteContainer.textContent = todayQuote;

    // ===============================
    // 4. Scroll zamanı fade-in və kenardan gəlmə animasiyası
    // IntersectionObserver istifadə olunur
    // ===============================
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // section görünəndə "active" sinfi əlavə edilir
          entry.target.querySelector(".quote-container").classList.add("active");
        }
      });
    }, { threshold: 0.8 });

    observer.observe(document.getElementById("daily-quote"));


    //* Smooth hover effect 
document.querySelectorAll(".trainer-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
