
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
// const crypto = require('crypto')
const fs = require('fs')
cloudinary.config({
    cloud_name:"dbollyylc",
    api_key:"941737455655464" ,
    api_secret:"nB9Deb6NGH_rMWev5FVi-Mwprgw",
});
cloudinary.config({
    secure:true
});
const upload = multer({ storage: multer.memoryStorage() });
async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }
async function uploadImage(req){
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        return (JSON.stringify(cldRes))
      } catch (error) {
        console.log(error);
      }
}
// {**************************************************************}
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         crypto.randomBytes(16, (err, buffer) => {
//             if (err) {
//                 cb(err);
//             } else {
//                 const uniqueFilename = buffer.toString('hex') + '-' + file.originalname;
//                 cb(null, uniqueFilename);
//             }
//         });
//     },
// });

// {-------------SIMPLE DISK STOAREG IMAGE UPLAOD-------------- }
// async function uploadImage(filePath) {
//     cloudinary.uploader
//     .upload(filePath)
//     .then(result=>console.log(result));
// }
// {**************************************************************}






module.exports = { upload, uploadImage };
