const express = require('express');
const path = require('path');
const cvData = require('./data/cvData'); // Import dữ liệu CV của bạn

const app = express();
const PORT = 3000;

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cung cấp các file tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route chính để hiển thị trang CV
app.get('/', (req, res) => {
    // Truyền toàn bộ đối tượng cvData vào template cv.ejs
    res.render('cv', { data: cvData });
});

app.listen(PORT, () => {
    console.log(`🚀 Trang web CV của bạn đang chạy tại http://localhost:${PORT}`);
});