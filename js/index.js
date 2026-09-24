// ดึงข้อมูลเกมจาก API
async function fetchGames() {
  try {
    const response = await fetch('/api/games');
    const games = await response.json();
    // เรียงตาม year จากมากไปน้อย (เกมใหม่สุดอยู่บน)
    games.sort((a, b) => b.year - a.year);
    return games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
}

async function renderLeaderboard() {
  const container = document.getElementById("leaderboard-container");
  if (!container) return;

  const gotyData = await fetchGames();

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
        <div class="relative w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform hover:-translate-y-2 cursor-pointer" onclick="window.location.href='game-detail.html?id=${rank2._id}'">
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
        <div class="relative w-32 h-32 md:w-40 md:h-40 mb-4 transition-transform hover:-translate-y-2 cursor-pointer" onclick="window.location.href='game-detail.html?id=${rank1._id}'">
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
        <div class="relative w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform hover:-translate-y-2 cursor-pointer" onclick="window.location.href='game-detail.html?id=${rank3._id}'">
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
  `;

  // Check if we are on the leaderboard page
  const isLeaderboardPage = window.location.pathname.includes('leaderboard');

  if (isLeaderboardPage) {
    html += `
      <!-- Leaderboard List -->
      <div class="w-full max-w-5xl mx-auto bg-[#1E293B]/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden shadow-lg mt-12">
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
        <div class="grid grid-cols-12 gap-4 p-5 border-b border-white/5 items-center hover:bg-white/5 transition-colors group cursor-pointer" onclick="window.location.href='game-detail.html?id=${game._id}'">
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
  } else {
    // Show a button to view full leaderboard if we are on the index page
    html += `
      <div class="mt-8 mb-4 text-center">
        <a href="leaderboard.html" class="inline-block px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-[#0F172A] transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            VIEW FULL LEADERBOARD
        </a>
      </div>
    `;
  }
  
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

function scrollDown() {
  document.getElementById("target-section").scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// --- Carousel System ---
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const dots = document.querySelectorAll(".carousel-dot");
    
    if (!track) return;
    
    const slides = Array.from(track.children);
    
    // Function to update dots and button states
    const updateDots = (activeIndex) => {
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.setAttribute("aria-selected", "true");
            } else {
                dot.setAttribute("aria-selected", "false");
            }
        });
        
        if (prevBtn) prevBtn.disabled = activeIndex === 0;
        if (nextBtn) nextBtn.disabled = activeIndex === slides.length - 1;
    };
    
    // Scroll to specific slide index
    const goToSlide = (index, smooth = true) => {
        const slide = slides[index];
        if (slide) {
            // center the slide in the track
            const scrollLeft = slide.offsetLeft - track.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
            track.scrollTo({
                left: scrollLeft,
                behavior: smooth ? "smooth" : "auto"
            });
        }
    };
    
    // Intersection Observer to detect current slide in view
    const observer = new IntersectionObserver((entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let activeIndex = -1;
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                activeIndex = slides.indexOf(entry.target);
            }
        });
        
        if (activeIndex !== -1) {
            updateDots(activeIndex);
        }
    }, {
        root: track,
        threshold: [0.3, 0.5, 0.8] 
    });
    
    slides.forEach(slide => observer.observe(slide));
    
    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
    });

    // Set initial slide to slide 2 (index 1) - Expedition 33
    // Use a small timeout to ensure DOM layout is complete before scrolling
    setTimeout(() => {
        goToSlide(1, false);
    }, 100);
});

// --- Games Page Rendering & Search ---
document.addEventListener("DOMContentLoaded", async () => {
    const gamesGrid = document.getElementById("games-grid");
    const searchInput = document.getElementById("searchInput");
    const noResults = document.getElementById("no-results");
    const searchCount = document.getElementById("search-count");

    if (!gamesGrid) return; // Only execute on pages with games-grid (games.html)

    // ดึงข้อมูลจาก API
    const allGames = await fetchGames();

    const renderGames = (games) => {
        gamesGrid.innerHTML = '';
        
        if (games.length === 0) {
            gamesGrid.classList.add('hidden');
            if (noResults) noResults.classList.remove('hidden');
            if (searchCount) {
                searchCount.textContent = '0 results found';
                searchCount.classList.remove('hidden');
            }
            return;
        }

        gamesGrid.classList.remove('hidden');
        if (noResults) noResults.classList.add('hidden');
        
        if (searchCount && searchInput && searchInput.value.trim() !== '') {
            searchCount.textContent = `${games.length} result${games.length !== 1 ? 's' : ''} found`;
            searchCount.classList.remove('hidden');
        } else if (searchCount) {
            searchCount.classList.add('hidden');
        }

        games.forEach(game => {
            const card = document.createElement('div');
            // Premium game card styling
            card.className = "bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2";
            card.onclick = () => window.location.href = `game-detail.html?id=${game._id}`;
            
            card.innerHTML = `
                <div class="relative aspect-[3/4] overflow-hidden">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/20 to-transparent opacity-90"></div>
                    <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                        ${game.year}
                    </div>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between relative z-10 -mt-10">
                    <div>
                        <h3 class="text-white font-black text-xl leading-tight mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2 drop-shadow-lg">${game.title}</h3>
                        <p class="text-slate-300 text-sm font-medium mb-3 line-clamp-1">${game.developer}</p>
                    </div>
                    <div class="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">GOTY Winner</span>
                        <div class="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#0F172A] transition-colors shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            `;
            gamesGrid.appendChild(card);
        });
    };

    // Initial render
    renderGames(allGames);

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                renderGames(allGames);
                return;
            }
            
            const filteredGames = allGames.filter(game => {
                return game.title.toLowerCase().includes(searchTerm) || 
                       game.developer.toLowerCase().includes(searchTerm) ||
                       game.year.toString().includes(searchTerm);
            });
            
            renderGames(filteredGames);
        });
    }
});

// ฟังก์ชันเพิ่มเกม
async function addGame(event) {
  event.preventDefault(); // ป้องกันหน้า refresh

  const gameData = {
    title: document.getElementById('game-title').value,
    developer: document.getElementById('game-developer').value,
    description: document.getElementById('game-description').value,
    genre: document.getElementById('game-genre').value,
    rating: Number(document.getElementById('game-rating').value),
    year: Number(document.getElementById('game-year').value),
    image: document.getElementById('game-image').value
  };

  try {
    const response = await fetch('/api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData)
    });

    if (response.ok) {
      alert('เพิ่มเกมสำเร็จ!');
      loadGames(); // โหลดตารางใหม่
    }
  } catch (error) {
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
}

// ฟังก์ชันลบเกม
async function deleteGame(gameId) {
  if (!confirm('ต้องการลบเกมนี้ใช่หรือไม่?')) return;

  try {
    const response = await fetch(`/api/games/${gameId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      alert('ลบเกมสำเร็จ!');
      loadGames(); // โหลดตารางใหม่
    }
  } catch (error) {
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
}

// ฟังก์ชันแก้ไขเกม
async function updateGame(gameId) {
  const gameData = {
    title: document.getElementById('edit-title').value,
    developer: document.getElementById('edit-developer').value,
    rating: Number(document.getElementById('edit-rating').value)
  };

  try {
    const response = await fetch(`/api/games/${gameId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData)
    });

    if (response.ok) {
      alert('แก้ไขเกมสำเร็จ!');
      loadGames();
    }
  } catch (error) {
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
}

// โหลดเกมทั้งหมดมาแสดงในตาราง (สำหรับหน้าจัดการเกม)
async function loadGames() {
  const tableBody = document.getElementById('games-table-body');
  if (!tableBody) return; // ถ้าไม่มีตาราง (ไม่ได้อยู่หน้า manage) ก็ไม่ต้องทำอะไร

  const games = await fetchGames();
  
  tableBody.innerHTML = '';
  games.forEach(game => {
    tableBody.innerHTML += `
      <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
        <td class="p-3 text-white">${game.title}</td>
        <td class="p-3 text-slate-300">${game.developer}</td>
        <td class="p-3 text-cyan-400 font-mono">${game.year}</td>
        <td class="p-3 text-amber-400">⭐ ${game.rating}</td>
        <td class="p-3 flex gap-2">
          <button onclick="deleteGame('${game._id}')" 
                  class="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40 transition-colors">
            ลบ
          </button>
          <!-- ปุ่มแก้ไข (ถ้ามีฟอร์มแก้ไข) -->
          <!-- <button onclick="openEditModal('${game._id}')" class="...">แก้ไข</button> -->
        </td>
      </tr>
    `;
  });
}

// เรียกโหลดเกมเมื่อโหลดหน้าเสร็จ (สำหรับหน้า manage.html)
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('games-table-body')) {
        loadGames();
    }
});

// --- ระบบแสดงรายละเอียดเกมและรีวิว (สำหรับหน้า game-detail.html) ---

async function loadGameDetail() {
    const detailContent = document.getElementById('game-detail-content');
    const loadingState = document.getElementById('loading-state');
    
    if (!detailContent || !loadingState) return;

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    if (!gameId) {
        alert("ไม่พบรหัสเกม");
        window.location.href = 'games.html';
        return;
    }

    try {
        // ดึงข้อมูลเกม
        const response = await fetch(`/api/games/${gameId}`);
        if (!response.ok) throw new Error("ไม่สามารถดึงข้อมูลเกมได้");
        
        const game = await response.json();

        // อัปเดต UI
        document.title = `Nexus - ${game.title}`;
        document.getElementById('detail-image').src = game.image;
        document.getElementById('detail-year').textContent = game.year;
        document.getElementById('detail-genre').textContent = game.genre || 'Game';
        document.getElementById('detail-title').textContent = game.title;
        document.getElementById('detail-developer').textContent = game.developer;
        document.getElementById('detail-description').textContent = game.description || 'No description available.';
        document.getElementById('detail-rating').textContent = game.rating ? game.rating.toFixed(1) : '-';

        // ซ่อน Loading, โชว์ Content
        loadingState.classList.add('hidden');
        detailContent.classList.remove('hidden');

        // ดึงรีวิว
        loadGameReviews(gameId);

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

async function loadGameReviews(gameId) {
    const reviewsContainer = document.getElementById('reviews-container');
    const noReviews = document.getElementById('no-reviews');

    try {
        const response = await fetch(`/api/reviews/game/${gameId}`);
        const reviews = await response.json();

        reviewsContainer.innerHTML = '';

        if (reviews.length === 0) {
            noReviews.classList.remove('hidden');
        } else {
            noReviews.classList.add('hidden');
            
            reviews.forEach(review => {
                const date = new Date(review.createdAt).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                reviewsContainer.innerHTML += `
                    <div class="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg border border-cyan-500/30">
                                    ${review.reviewerName.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4 class="font-bold text-white text-sm">${review.reviewerName}</h4>
                                    <p class="text-xs text-slate-500">${date}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20">
                                <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span class="text-sm font-bold text-amber-400">${review.rating}/10</span>
                            </div>
                        </div>
                        <p class="text-slate-300 text-sm leading-relaxed">${review.comment}</p>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error('Error loading reviews:', error);
    }
}

async function submitReview(event) {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    if (!gameId) return;

    const reviewData = {
        game: gameId,
        reviewerName: document.getElementById('reviewer-name').value,
        rating: Number(document.getElementById('review-rating').value),
        comment: document.getElementById('review-comment').value
    };

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        });

        if (response.ok) {
            alert('ส่งรีวิวสำเร็จ ขอบคุณสำหรับความคิดเห็น!');
            document.getElementById('review-form').reset();
            loadGameReviews(gameId); // โหลดรีวิวใหม่
        } else {
            const data = await response.json();
            alert('เกิดข้อผิดพลาด: ' + (data.message || 'ไม่สามารถส่งรีวิวได้'));
        }
    } catch (error) {
        console.error(error);
        alert('เกิดข้อผิดพลาดในการส่งรีวิว');
    }
}

// เรียกโหลดรายละเอียดเกมเมื่อโหลดหน้าเสร็จ (สำหรับหน้า game-detail.html)
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('game-detail-content')) {
        loadGameDetail();
    }
});
