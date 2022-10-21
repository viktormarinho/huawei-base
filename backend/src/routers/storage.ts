import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { Db } from '../config';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdir(path.join(__dirname, './../../uploads/'), (err) => {
            cb(null, path.join(__dirname, './../../uploads/'));
        });
    },
    filename: (req, file, cb) => {
        cb(null, crypto.randomBytes(4).toString("hex") + file.originalname);
    }
});

const upload = multer({ storage });
const router = express.Router();

router.get('/admin/get-uploads', (req, res) => {
    Db.serialize(() => {
        Db.all(
            `SELECT * FROM __storage`,
            function (error, rows) {
                if (error) {
                    return res.status(500).json({ error, msg: error.message })
                }

                res.json({ files: rows })
            }
        )
    })
})

router.post('/upload', upload.single('upload'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: true, msg: 'No files were uploaded within the request' });
    }

    const filepath = path.resolve(req.file.path);

    Db.serialize(() => {
        Db.run(
            `INSERT INTO __storage (filepath) VALUES (?)`,
            filepath,
            function (error) {
                if (error) {
                    return res.status(500).json({ error, msg: error.message })
                }
            }
        )
    })
    res.json({ filepath });
})


export default router;