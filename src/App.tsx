import React from "react";
import Slider from "react-slick";
import anh1 from "./assets/images/anh1.jpg";
import anh2 from "./assets/images/anh2.jpg";
import anh3 from "./assets/images/anh3.jpg";
import anh4 from "./assets/images/anh4.jpg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const imageUrls = [anh1, anh2, anh3, anh4];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Tin Tức Đặc Biệt: Siêu Sao của Ngày Hôm Nay!</h1>
      </header>

      <section className="hero-section">
        <Slider {...sliderSettings}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Ảnh ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
        <h2 className="hero-title">
          Ngôi Sao Sáng Nhất - Gương mặt vàng trong làng Vui Vẻ: Ngọc Mai
        </h2>
      </section>

      <section className="news">
        <h3>Đưa Tin Nóng: Ngọc Mai - Siêu Anh Hùng của Ngày!</h3>
        <p>
          Trong bước ngoặt lịch sử, Ngọc Mai vừa chứng tỏ rằng không khó khăn
          nào có thể khiến cô ấy gục ngã! Với sức mạnh của một "nữ chiến binh,"
          cô ấy là tấm gương sáng cho tất cả những ai đang tìm kiếm niềm vui và
          sức sống.
        </p>
      </section>

      <section className="future">
        <h3>Tiêu Điểm Tương Lai:</h3>
        <p>
          Nguồn tin đáng tin cậy cho biết, sắp tới Ngọc Mai dự định tổ chức một
          buổi "chữa lành tâm hồn" và học cách yêu thương chính mình nhiều hơn
          mỗi ngày. Đây chắc chắn sẽ là bước tiến quan trọng trong sự nghiệp tìm
          kiếm hạnh phúc!
        </p>
      </section>

      <section className="forecast">
        <h3>Dự Báo Tâm Trạng:</h3>
        <p>
          Dự báo tuần này: nụ cười đầy năng lượng và những điều tuyệt vời đang
          chờ đón! Chuẩn bị tâm lý cho một tuần đầy hứng khởi, nụ cười sẽ tỏa
          sáng và làm cả thế giới bừng lên vì niềm vui của bạn.
        </p>
      </section>

      <section className="secrets">
        <h3>Bí Mật Bật Mí:</h3>
        <p>
          Vâng, có thể bạn chưa biết nhưng Ngọc Mai có khả năng “dịch chuyển tức
          thời” tâm trạng buồn bã thành niềm vui bằng một món trà sữa! Đây là
          phát hiện mới nhất và đang khiến cộng đồng "khâm phục"!
        </p>
      </section>

      <section className="special-announcement">
        <h3>Bảng Tin Đặc Biệt:</h3>
        <p>
          Cảnh báo: Độ đáng yêu của Ngọc Mai có thể làm "tan chảy" trái tim
          người khác. Hãy giữ khoảng cách an toàn để tránh bị "hạ gục" bởi nụ
          cười của cô ấy nhé!
        </p>
      </section>

      <section className="appreciation">
        <h3>Góc Tri Ân:</h3>
        <p>
          Để tri ân người bạn tuyệt vời này, một tấm huy chương vàng cho danh
          hiệu "Người truyền cảm hứng mạnh mẽ nhất của năm!" Tất cả những ai
          tiếp xúc đều khẳng định rằng: “Cô ấy là ngọn lửa ấm áp khiến cuộc đời
          thêm ý nghĩa.”
        </p>
      </section>

      <footer className="footer">
        <p>
          © 2024 - Một món quà nhỏ để mang nụ cười đến với bạn hôm nay và mỗi
          ngày!
        </p>
      </footer>
    </div>
  );
};

export default App;
