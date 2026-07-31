const multer = require("multer");
const path = require("path");

// ==========================
// Thumbnail Storage
// ==========================
const thumbnailStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/thumbnails");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// ==========================
// Video Storage
// ==========================
const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/videos");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// ==========================
// PDF Storage
// ==========================
const pdfStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/pdfs");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

module.exports = {
    uploadThumbnail: multer({ storage: thumbnailStorage }),
    uploadVideo: multer({ storage: videoStorage }),
    uploadPDF: multer({ storage: pdfStorage })
};