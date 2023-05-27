import "./searchItem.css"

export const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://angiangtourism.vn/khach-san-dep-sai-gon/imager_7_22969_700.jpg" 
        alt="" 
        className="siImg"
        />
        <div className="siDesc">
        <h1 className="siTitle">Friday Hotel</h1>
        <span className="siDistance">500m từ trung tâm</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">
        Phòng với phong cách Châu Âu
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Miễn phí hoàn trả</span>
        <span className="siCancelOpSubtitle">
        Bạn có thể hủy bỏ sau này, vì vậy hãy book ngay giá tuyệt vời này ngay hôm nay.
        </span>
        </div>
        <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">200,000đ</span>
          <span className="siTaxOp">Bao gồm phí taxi và các phí khác</span>
          <button className="siCheckButton">Kiểm tra tính khả dụng</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem;