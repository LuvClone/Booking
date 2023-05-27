import "./Featured.css"

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=" alt="" className="featuredImg" />
        <div className="featuredTittles">
          <h1>Sài Gòn</h1>
          <h2>2,693</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=" alt="" className="featuredImg" />
        <div className="featuredTittles">
          <h1>Hà Nội</h1>
          <h2>2,209</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="" className="featuredImg" />
        <div className="featuredTittles">
          <h1>Đà Lạt</h1>
          <h2>1,221</h2>
        </div>
      </div>
    </div>
  )
}
export default Featured
