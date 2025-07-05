const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary')
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png',
        public_id: async (req, file) => Date.now() + '-' + file.originalname.replace(/\.[^/.]+$/, "")
    }
})

const multerCloudFileUploader = multer({ storage: storage })

module.exports = { multerCloudFileUploader }