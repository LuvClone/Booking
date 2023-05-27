import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất đến bạn.</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email của bạn" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList