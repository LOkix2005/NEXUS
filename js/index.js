const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// ข้อมูลตัวอย่าง (จะเปลี่ยนเป็นข้อมูลจริงได้)
const games = [
    'Elden Ring',
    'Cyberpunk 2077',
    'The Witcher 3',
    'Dark Souls III',
    'Hollow Knight',
];

// เมื่อพิมพ์ในช่องค้นหา
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    // ถ้าช่องว่าง → ซ่อน dropdown
    if (query === '') {
        searchResults.classList.add('hidden');
        return;
    }
    
    // กรองชื่อเกมที่ตรงกับคำค้นหา
    const filtered = games.filter(game => 
        game.toLowerCase().includes(query)
    );
    
    // สร้าง HTML สำหรับแต่ละผลลัพธ์
    if (filtered.length > 0) {
        searchResults.innerHTML = filtered.map(game => 
            `<div class="px-4 py-3 text-[#94A3B8] hover:bg-[#334155] hover:text-white cursor-pointer transition-colors">
                ${game}
            </div>`
        ).join('');
        searchResults.classList.remove('hidden');
    } else {
        searchResults.innerHTML = `
            <div class="px-4 py-3 text-[#64748B]">
                ไม่พบผลลัพธ์
            </div>`;
        searchResults.classList.remove('hidden');
    }
});

// คลิกนอก search → ซ่อน dropdown
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
    }
});

// 1. Mock Data: ข้อมูลเกม GOTY 10 รายการ
    const gotyGames = [
      { id: "goty-2024", title: "Astro Bot", year: 2024, genre: "Platformer", rating: "9.4/10", desc: "การผจญภัยสุดสร้างสรรค์บนโลกแพลตฟอร์ม 3D" },
      { id: "goty-2023", title: "Baldur's Gate 3", year: 2023, genre: "CRPG", rating: "9.6/10", desc: "สุดยอดเกม RPG ยุคใหม่ที่ให้อิสระในการเล่นสูงสุด" },
      { id: "goty-2022", title: "Elden Ring", year: 2022, genre: "Action RPG", rating: "9.5/10", desc: "โลกเปิดสไตล์ Soulsborne อันกว้างใหญ่และท้าทาย" },
      { id: "goty-2021", title: "It Takes Two", year: 2021, genre: "Co-op Adventure", rating: "9.1/10", desc: "เกมผจญภัย Co-op สองคนที่ผสมผสานความสนุกหลากรูปแบบ" },
      { id: "goty-2020", title: "The Last of Us Part II", year: 2020, genre: "Action-Adventure", rating: "9.3/10", desc: "เรื่องราวเข้มข้นของการเอาชีวิตรอดและการล้างแค้น" },
      { id: "goty-2019", title: "Sekiro: Shadows Die Twice", year: 2019, genre: "Action", rating: "9.2/10", desc: "เกมแอ็กชันฟันดาบด้วยระบบ Parrying ที่ดุเดือด" },
      { id: "goty-2018", title: "God of War", year: 2018, genre: "Action-Adventure", rating: "9.4/10", desc: "การเดินทางของ Kratos และ Atreus ในดินแดนเทพนอร์ส" },
      { id: "goty-2017", title: "Zelda: Breath of the Wild", year: 2017, genre: "Open World", rating: "9.7/10", desc: "นิยามใหม่ของเกม Open World แห่งอิสรภาพ" },
      { id: "goty-2016", title: "Overwatch", year: 2016, genre: "Hero Shooter", rating: "9.0/10", desc: "เกมยิงแบบทีม 6v6 ที่เปิดมิติใหม่ของ Hero Shooter" },
      { id: "goty-2015", title: "The Witcher 3: Wild Hunt", year: 2015, genre: "Action RPG", rating: "9.5/10", desc: "มหากาพย์การตามหา Ciri ของ Geralt of Rivia" }
    ];

    // 2. ฟังก์ชัน Render Card ลงบน HTML
    const gameGrid = document.getElementById("game-grid");

    function renderGames() {
      gameGrid.innerHTML = gotyGames.map(game => `
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-lg transition duration-200">
          <div>
            <span class="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-400/10 text-amber-400 mb-3">
              GOTY ${game.year}
            </span>
            <h3 class="text-xl font-bold text-white mb-1">${game.title}</h3>
            <p class="text-xs text-slate-400 mb-2">แนว: ${game.genre} | คะแนน: ${game.rating}</p>
            <p class="text-slate-300 text-sm leading-relaxed">${game.desc}</p>
          </div>
          
          <!-- ปุ่ม Grab ID โดยใช้ data-id attribute -->
          <button 
            data-id="${game.id}" 
            class="grab-btn mt-5 w-full py-2 px-4 bg-slate-700 hover:bg-amber-500 hover:text-slate-900 text-slate-200 font-semibold rounded-lg text-sm transition"
          >
            เลือกดูข้อมูล (Grab ID)
          </button>
        </div>
      `).join("");

      attachEventListeners();
    }

    // 3. ฟังก์ชันดักจับและอ่านค่า Game ID (Grab ID Handler)
    function attachEventListeners() {
      const buttons = document.querySelectorAll(".grab-btn");
      
      buttons.forEach(button => {
        button.addEventListener("click", (event) => {
          // ดึง ID จาก data-id attribute
          const selectedId = event.currentTarget.getAttribute("data-id");
          handleGameSelection(selectedId);
        });
      });
    }

    // 4. การนำ ID ไปประมวลผลต่อ
    function handleGameSelection(gameId) {
      // ค้นหา Object เกมจาก ID ที่ได้
      const gameData = gotyGames.find(g => g.id === gameId);
      
      if (!gameData) return;

      const infoSection = document.getElementById("selected-info");
      const detailContent = document.getElementById("detail-content");

      // แสดงกล่องผลลัพธ์พร้อมข้อมูล
      infoSection.classList.remove("hidden");
      detailContent.innerHTML = `
        <p><strong class="text-amber-400">Grabbed ID:</strong> <code>${gameData.id}</code></p>
        <p><strong class="text-white">ชื่อเกม:</strong> ${gameData.title} (${gameData.year})</p>
        <p><strong class="text-white">รายละเอียด:</strong> ${gameData.desc}</p>
      `;

      // เลื่อนจอขึ้นไปดูกล่องข้อมูลอย่างนุ่มนวล
      infoSection.scrollIntoView({ behavior: "smooth" });
    }

    // เริ่มทำงานเมื่อโหลดหน้าเว็บ
    renderGames();