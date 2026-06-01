Import 'dotenv/config';

const settings = {
/* ================= DATABASE ================= */

DATABASE_URL: process.env.DATABASE_URL || '',
    
/* ================= BOT IDENTITY ================= */

botName: process.env.BOT_NAME || '乙𝐎𝐔𝐕𝐈𝐊',
botOwner: process.env.BOT_OWNER || '乙𝐎𝐔𝐕𝐈𝐊',
ownerNumber: process.env.OWNER_NUMBER || '918918860814',
author: process.env.AUTHOR || '乙𝐎𝐔𝐕𝐈𝐊',
packname: process.env.PACKNAME || '乙𝐎𝐔𝐕𝐈𝐊',
description: process.env.DESCRIPTION || 'Multi-device WhatsApp bot',

/* ================= SESSION ================= */

sessionId: process.env.SESSION_ID || 'Ice~agMzue',
pairingNumber: process.env.PAIRING_NUMBER || '',
CDN: 'https://media.mrfrankofc.gleeze.com'

};

// Sync DATABASE_URL back to process.env so all modules pick it up
if (settings.DATABASE_URL && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = settings.DATABASE_URL;
}

export default settings;
