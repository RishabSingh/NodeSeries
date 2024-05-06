const os = require('os');
const bytes = require('bytes');

const totalMemory = os.totalmem();

console.log("Total Memory: " + bytes(totalMemory)); // Total Memory in human-readable format

// Convert to KB, MB, and GB
const totalMemoryKB = bytes(totalMemory, { unit: 'KB' });
const totalMemoryMB = bytes(totalMemory, { unit: 'MB' });
const totalMemoryGB = bytes(totalMemory, { unit: 'GB' });

console.log("Total Memory (KB): " + totalMemoryKB);
console.log("Total Memory (MB): " + totalMemoryMB);
console.log("Total Memory (GB): " + totalMemoryGB);
