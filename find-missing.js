const fs = require('fs');
const files = [1,3,5,6,10,11,18,25,26,27,28,31,33];

files.forEach(n => {
  const num = String(n).padStart(2,'0');
  const path = 'lessons/lesson-' + num + '.js';
  const code = fs.readFileSync(path, 'utf8');

  // Extract text fields and sentenceTranslations via regex
  // For texts array format (L01 style)
  const textsMatch = code.match(/texts:\s*\[/);

  if (textsMatch) {
    // Multi-text format - find each text block
    const textBlocks = [];
    const textRegex = /text:\s*'((?:[^'\\]|\\.)*)'/g;
    const textRegex2 = /text:\s*`([^`]*)`/g;
    let m;
    while ((m = textRegex.exec(code)) !== null) textBlocks.push(m[1]);
    while ((m = textRegex2.exec(code)) !== null) textBlocks.push(m[1]);

    textBlocks.forEach((txt, idx) => {
      const sentences = txt.split(/(?<=[.!?])\s+/);
      const missing = sentences.filter(s => {
        if (!s.trim()) return false;
        // Check if this exact string exists as a key in sentenceTranslations
        return !code.includes("'" + s + "'") && !code.includes('"' + s + '"');
      });
      if (missing.length > 0) {
        console.log(`=== L${num} text-${idx}: ${missing.length} missing ===`);
        missing.forEach(s => console.log(JSON.stringify(s)));
      }
    });
  } else {
    // Single text format
    const textMatch = code.match(/text:\s*`([^`]*)`/);
    if (textMatch) {
      const txt = textMatch[1].trim();
      const sentences = txt.split(/(?<=[.!?])\s+/);
      const missing = sentences.filter(s => {
        if (!s.trim()) return false;
        const escaped = s.replace(/'/g, "\\'");
        return !code.includes("'" + s + "'") && !code.includes("'" + escaped + "'");
      });
      if (missing.length > 0) {
        console.log(`=== L${num}: ${missing.length} missing ===`);
        missing.forEach(s => console.log(JSON.stringify(s)));
      }
    }
  }
});
