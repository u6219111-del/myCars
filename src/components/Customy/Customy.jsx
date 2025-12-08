import React from 'react'
import "./Customy.css"
function Customy() {
  return (

        <section className="reviews-section">
      <h2 className="reviews-title">Reviews from our customers</h2>

      <div className="reviews-grid">
        

        <div className="review-card">
          <div className="review-top">
            <span className="quote">"</span>
            <p className="review-text">
              Et aliquet netus at sapien pellentesque mollis nec dignissim
              maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque
            </p>
          </div>

          <div className="review-bottom">
            <img
              className="avatar"
              src="https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=1500,q=80/content/images/e76dcfd823e8948c948e77095e3bd2deddc2efbf.jpeg"
              alt="Emanuel Boyle"
            />
            <p className="company">Kuphal LLC</p>
            <p className="name">Emanuel Boyle</p>
          </div>
        </div>

      
        <div className="review-card">
          <div className="review-top">
            <span className="quote">"</span>
            <p className="review-text">
              Purus consectetur varius quis urna phasellus enim mattis. Sem
              tincidunt tortor nunc egestas amet adipiscing ligula
            </p>
          </div>

          <div className="review-bottom">
            <img
              className="avatar"
              src="https://pitoka.ru/wp-content/uploads/2024/02/avatarka-devushka-dlja-soc-setej-01.jpg"
              alt="River Graves"
            />
            <p className="company">Glover – Orn</p>
            <p className="name">River Graves</p>
          </div>
        </div>

 
        <div className="review-card">
          <div className="review-top">
            <span className="quote">"</span>
            <p className="review-text">
              Quam neque odio urna euismod felis. Sit egestas magna in quisque
              famesdapibus quis sapien magna. Nisl non eget sit pellentesque
              tristique et
            </p>
          </div>

          <div className="review-bottom">
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoq2atmi6KMshTH4xSMXalkyCi1CbTEhxLg&s"
              alt="Ryder Malone"
            />
            <p className="company">Haag LLC</p>
            <p className="name">Ryder Malone</p>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Customy