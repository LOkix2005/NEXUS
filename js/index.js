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
