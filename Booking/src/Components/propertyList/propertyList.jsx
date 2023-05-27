import "./propertyList.css"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
            <div className="pListTittles">
                <h1>Hotel</h1>
                <h2>950,956 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
        <img src="https://cdn-www.vinid.net/2020/05/bcdfdd6e-hotel-container-%C4%91%C3%A0-l%E1%BA%A1t.jpg" alt="" className="pListImg" />
            <div className="pListTittles">
                <h1>Homestay</h1>
                <h2>1,013,444 homestays</h2>
            </div>
        </div>
        <div className="pListItem">
        <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg" />
            <div className="pListTittles">
                <h1>Resort</h1>
                <h2>18,952 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" alt="" className="pListImg" />
            <div className="pListTittles">
                <h1>Villa</h1>
                <h2>546,047 villas</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList