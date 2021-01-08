# 存档
localStorage.mem = JSON.stringify(nes.cpu.mem); // save
localStorage.ppu_scantile = JSON.stringify(nes.ppu.scantile);
localStorage.ppu_attrib = JSON.stringify(nes.ppu.attrib)
localStorage.ppu_buffer = JSON.stringify(nes.ppu.buffer)

# 读档
nes.cpu.mem = JSON.parse(localStorage.mem); // load
nes.ppu.scantile = JSON.parse(localStorage.ppu_scantile);
nes.ppu.attrib = JSON.parse(localStorage.ppu_attrib);
nes.ppu.buffer = JSON.parse(localStorage.ppu_buffer)
