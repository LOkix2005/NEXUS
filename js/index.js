const gotyData = [
  {
    year: 2025,
    title: "Clair Obscur: Expedition 33",
    developer: "Sandfall Interactive",
    description: "An upcoming reactive turn-based RPG with stunning next-gen visuals, where players lead a desperate expedition to destroy the Paintress.",
    rating: 5,
    image: "./images/expedition33.jpg"
  },
  {
    year: 2024,
    title: "Astro Bot",
    developer: "Team ASOBI",
    description: "A joyful and inventive 3D platformer that celebrates PlayStation's rich history through incredibly fun and charming gameplay.",
    rating: 5,
    image: "./images/astrobot.jpg"
  },
  {
    year: 2023,
    title: "Baldur's Gate 3",
    developer: "Larian Studios",
    description: "A story-rich, party-based RPG set in the universe of Dungeons & Dragons.",
    rating: 5,
    image: "./images/baldur'sgate3.jpg"
  },
  {
    year: 2022,
    title: "Elden Ring",
    developer: "FromSoftware",
    description: "A sprawling dark fantasy action-RPG created in collaboration with George R. R. Martin.",
    rating: 5,
    image: "./images/eldenring.jpg"
  },
  {
    year: 2021,
    title: "It Takes Two",
    developer: "Hazelight Studios",
    description: "A genre-bending platform adventure created purely for co-op.",
    rating: 4,
    image: "./images/ittakestwo.jpg"
  },
  {
    year: 2020,
    title: "The Last of Us Part II",
    developer: "Naughty Dog",
    description: "An intense, harrowing, and emotional adventure following Ellie and Abby.",
    rating: 5,
    image: "./images/thelastofus2.jpg"
  },
  {
    year: 2019,
    title: "Sekiro: Shadows Die Twice",
    developer: "FromSoftware",
    description: "Carve your own clever path to vengeance in an all-new adventure.",
    rating: 5,
    image: "./images/sekiro.jpg"
  },
  {
    year: 2018,
    title: "God of War",
    developer: "Santa Monica Studio", 
    description: "Kratos and his son Atreus embark on a mythic journey through Norse realms.", 
    rating: 5, 
    image: "./images/godofwar.jpg"
  },
  { year: 2017, 
    title: "The Legend of Zelda: Breath of the Wild", 
    developer: "Nintendo", 
    description: "Step into a world of discovery, exploration, and adventure.", 
    rating: 5, 
    image: "./images/zelda.jpg" },
  { year: 2016, 
    title: "Overwatch", 
    developer: "Blizzard Entertainment", 
    description: "A team-based multiplayer first-person shooter featuring a diverse cast of heroes.", 
    rating: 4, 
    image: "./images/Overwatch.png" }
];

function renderLeaderboard() {
  const container = document.getElementById("leaderboard-container");
  if (!container) return;

  if (gotyData.length < 3) return;

  const rank1 = gotyData[0];
  const rank2 = gotyData[1];
  const rank3 = gotyData[2];
  const others = gotyData.slice(3);

  let html = `
    <!-- Top 3 Podium Section -->
    <div class="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8 mb-16 mt-8">
      
      <!-- Rank 2 (Silver) -->
      <div class="flex flex-col items-center w-full md:w-1/3 order-2 md:order-1 relative">
        <div class="relative w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform hover:-translate-y-2">
          <img src="${rank2.image}" alt="${rank2.title}" class="w-full h-full rounded-2xl object-cover border-2 border-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.3)]">
        </div>
        <h3 class="text-lg font-bold text-white text-center mb-1 line-clamp-1">${rank2.title}</h3>
        <div class="w-full mt-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-t border-slate-500/30 rounded-t-2xl p-6 text-center shadow-[0_-10px_30px_rgba(148,163,184,0.05)] h-40 flex flex-col justify-start relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1 bg-slate-400/50"></div>
            <div class="w-10 h-10 mx-auto bg-slate-400/20 rounded-full flex items-center justify-center mb-3">
                <span class="text-slate-300 font-bold text-xl">2</span>
            </div>
            <p class="text-slate-300 font-bold text-sm mb-1">${rank2.developer}</p>
            <p class="text-cyan-400 font-bold text-xl flex justify-center items-center gap-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l1.6 4.9h5.1l-4.1 3 1.6 4.9-4.2-3-4.2 3 1.6-4.9-4.1-3h5.1z"/></svg>
                ${rank2.year}
            </p>
        </div>
      </div>

      <!-- Rank 1 (Gold) -->
      <div class="flex flex-col items-center w-full md:w-1/3 order-1 md:order-2 z-10 relative">
        <div class="relative w-32 h-32 md:w-40 md:h-40 mb-4 transition-transform hover:-translate-y-2">
          <img src="${rank1.image}" alt="${rank1.title}" class="w-full h-full rounded-2xl object-cover border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
        </div>
        <h3 class="text-xl md:text-2xl font-bold text-white text-center mb-1 line-clamp-1">${rank1.title}</h3>
        <div class="w-full mt-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-t border-amber-500/30 rounded-t-2xl p-6 text-center shadow-[0_-10px_30px_rgba(251,191,36,0.1)] h-48 flex flex-col justify-start relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1 bg-amber-400/50"></div>
            <div class="w-12 h-12 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <span class="text-amber-400 font-black text-2xl">1</span>
            </div>
            <p class="text-amber-400 font-bold mb-1">${rank1.developer}</p>
            <p class="text-cyan-400 font-black text-2xl flex justify-center items-center gap-2">
                <svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l1.6 4.9h5.1l-4.1 3 1.6 4.9-4.2-3-4.2 3 1.6-4.9-4.1-3h5.1z"/></svg>
                ${rank1.year}
            </p>
        </div>
      </div>

      <!-- Rank 3 (Bronze) -->
      <div class="flex flex-col items-center w-full md:w-1/3 order-3 md:order-3 relative">
        <div class="relative w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform hover:-translate-y-2">
          <img src="${rank3.image}" alt="${rank3.title}" class="w-full h-full rounded-2xl object-cover border-2 border-orange-700 shadow-[0_0_15px_rgba(194,65,12,0.3)]">
        </div>
        <h3 class="text-lg font-bold text-white text-center mb-1 line-clamp-1">${rank3.title}</h3>
        <div class="w-full mt-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-t border-orange-700/30 rounded-t-2xl p-6 text-center shadow-[0_-10px_30px_rgba(194,65,12,0.05)] h-36 flex flex-col justify-start relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1 bg-orange-700/50"></div>
            <div class="w-10 h-10 mx-auto bg-orange-700/20 rounded-full flex items-center justify-center mb-2">
                <span class="text-orange-400 font-bold text-xl">3</span>
            </div>
            <p class="text-orange-400 font-bold text-xs mb-1">${rank3.developer}</p>
            <p class="text-cyan-400 font-bold text-lg flex justify-center items-center gap-1">
                <svg class="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l1.6 4.9h5.1l-4.1 3 1.6 4.9-4.2-3-4.2 3 1.6-4.9-4.1-3h5.1z"/></svg>
                ${rank3.year}
            </p>
        </div>
      </div>
    </div>

    <!-- Leaderboard List -->
    <div class="w-full max-w-5xl mx-auto bg-[#1E293B]/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden shadow-lg">
      <div class="grid grid-cols-12 gap-4 p-5 border-b border-white/10 text-slate-400 font-medium text-sm">
        <div class="col-span-2 text-center">Rank</div>
        <div class="col-span-5">Game Title</div>
        <div class="col-span-3 text-center">Developer</div>
        <div class="col-span-2 text-center">Year</div>
      </div>
  `;

  others.forEach((game, index) => {
    let rankNum = index + 4;
    html += `
      <div class="grid grid-cols-12 gap-4 p-5 border-b border-white/5 items-center hover:bg-white/5 transition-colors group">
        <div class="col-span-2 text-center font-bold text-xl text-slate-500 group-hover:text-cyan-400 transition-colors">${rankNum}</div>
        <div class="col-span-5 flex items-center gap-4">
            <img src="${game.image}" class="w-12 h-12 rounded-lg object-cover border border-white/10 shadow-sm" />
            <h4 class="font-bold text-white text-sm md:text-base leading-tight line-clamp-1">${game.title}</h4>
        </div>
        <div class="col-span-3 text-center text-slate-300 text-sm line-clamp-1">${game.developer}</div>
        <div class="col-span-2 text-center text-cyan-400 font-mono font-bold">${game.year}</div>
      </div>
    `;
  });

  html += `</div>`;
  
  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderLeaderboard);

// --- ระบบ Hamburger Menu ---
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // ถ้ามีปุ่มและเมนูในหน้านั้น ให้เริ่มทำงาน
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", () => {
            // คำสั่ง toggle คือการสลับ (ถ้าซ่อนอยู่ให้โชว์ ถ้าโชว์อยู่ให้ซ่อน)
            mobileMenu.classList.toggle("hidden");
        });
    }
});
