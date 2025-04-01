# Mô tả chương trình

## Giới thiệu
Chương trình này là một ứng dụng đồng hồ đếm ngược theo phương pháp **Pomodoro**, giúp người dùng quản lý thời gian làm việc và nghỉ ngơi hiệu quả. Pomodoro chia công việc thành:
- **25 phút** làm việc
- **5 phút** nghỉ ngắn
- **15 phút** nghỉ dài

Phương pháp này giúp duy trì sự tập trung cao độ. Trong buổi đầu tiên của CodeGym, phương pháp quản lý thời gian này cũng đã được giảng dạy.

---

## Vận dụng những kiến thức nào?

### 1. **HTML**
- Xây dựng khung giao diện cho ứng dụng.

### 2. **CSS**
- Căn chỉnh giao diện và thêm màu sắc để tăng tính thẩm mỹ.

### 3. **JavaScript**
- **Phần cốt lõi** của chương trình chính là xử lý logic đếm ngược bằng hàm `setInterval`.

#### 👉 Hàm `setInterval()` trong JavaScript:
Hàm `setInterval()` dùng để gọi một hàm sau mỗi khoảng thời gian nhất định (tính bằng mili giây). Nó tiếp tục thực hiện cho đến khi được dừng bằng `clearInterval()`.

```js
let intervalId = setInterval(function, milliseconds);
clearInterval(intervalId);
```
- `function`: Hàm hoặc đoạn mã bạn muốn thực thi định kỳ.
- `milliseconds`: Khoảng thời gian (tính bằng mili giây) giữa mỗi lần gọi hàm.
- `intervalId`: Giá trị trả về của `setInterval()`, dùng để dừng hẹn giờ sau này.

### 4. **Những kiến thức khác được sử dụng**
- **Lập trình hướng đối tượng (OOP)**: Tạo ra 2 class `Timer` (bộ đếm ngược) và `Stopwatch` (đồng hồ bấm giờ).
- **Tương tác với sự kiện**: Cài đặt, chuyển qua lại và điều khiển các đồng hồ.
- **Vòng lặp**: Dùng trong phần chuyển đổi giữa các tab đồng hồ.
- **Cấu trúc điều kiện**: Kiểm tra điều kiện và rẽ nhánh lệnh phù hợp.
- **Mảng**: Lưu lại các vòng thời gian trong đồng hồ bấm giờ.
- **Và những kiến thức JavaScript cơ bản khác.**

---

