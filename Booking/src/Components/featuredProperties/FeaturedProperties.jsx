import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/37/2016/07/31153430/52K3913a.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Central Palace Hotel</span>
        <span className="fpCity">Sài Gòn</span>
        <span className="fpPrice">Starting from 1,619,913đ</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn-www.vinid.net/2020/05/271c3b50-c%E1%BB%ADi-homestay-%C4%90%C3%A0-l%E1%BA%A1t.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Củi homestay</span>
        <span className="fpCity">Đà Lạt </span>
        <span className="fpPrice">Starting from 120,000đ</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://toplist.vn/images/800px/hanoi-la-siesta-hotel-trendy-2333-danh-gia-451541.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Bespoke & Trendy Hanoi</span>
        <span className="fpCity">Hà Nội</span>
        <span className="fpPrice">Starting from 7,511,997đ</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://reviewhomestay.vn/wp-content/uploads/2021/09/villa-sai-gon-saigon-Villa-Song-SaiGon.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Villa Sông SaiGon</span>
        <span className="fpCity">Sài Gòn</span>
        <span className="fpPrice">Starting from 7,000,000đ</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
