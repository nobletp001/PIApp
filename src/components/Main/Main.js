import React from 'react'

export default function Main() {
    return (
      <React.Fragment>
        <section class="home d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7 ">
                <div class="home-text">
                  <h1>Your One Stop Global Shop For Everything Pi Utilities</h1>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>
                <div class="home-btn">
                  <a href="#" class="btn btn-1">
             
                    Read More about Pi Hub......
                  </a>
                </div>
              </div>
              <div class="col-md-5 text-center">
                <div class="home-img">
                  <div class="circle"></div>
                 <img src="img/payment_img.png" alt="pi hub" />

                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section-padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section-title">
                  <h2>
                    <span>Major </span>Pi <span>Utilities</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class=" owl-carousel features-carousel">
                <div class="feature-item">
                  <div class="icon">
                    <i class="fas fa-cart-arrow-down"></i>
                  </div>
                  <h3> Pi Mall</h3>
                  <p>
             
                    Fast and Hitch Free Shopping Experience using Pi coins....
                  </p>
                </div>
                <div class="feature-item">
                  <div class="icon">
                    <i class="fa fa-exchange-alt" aria-hidden="true"></i>
                  </div>
                  <h3> Pi Exchange</h3>
                  <p> Instant and Reliable Crypo Trading Experience</p>
                </div>
                <div class="feature-item">
                  <div class="icon">
                    <i class="fas fa-credit-card"></i>
                  </div>
                  <h3> Pi Pay</h3>
                  <p> Fast and Reliable Payment Gateway for Business Owners</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
<section class="fun-facts section-padding">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-5 d-flex align-items-center justify-content-center">
				<div class="fun-facts-img">
					<img src="img/image2.png" alt="fun facts" />

				</div>
			</div>
			<div class="col-lg-6 col-md-7">
				<div class="section-title">
					<h2> Fun <span>Facts</span></h2>
				</div>
				<div class="fun-facts-text">
					<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<div class="row">
							<div class="col-sm-6">
								<div class="fun-fact-item style-1">
									<h3> Pihub</h3>
									<span>Pi Pay, Pi Exchange, Pi Mall.</span>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="fun-fact-item style-2">
									<h3> 18 Million </h3>
									<span>Above 18 million Engaged Pioneers</span>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="fun-fact-item style-3">
									<h3> 250 </h3>
									<span>In More Than 250 Countries</span>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="fun-fact-item style-4">
									<h3>10k</h3>
									<span> Currently more than 10,000 active nodes</span>
								</div>
							</div>
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="contact section-padding">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="section-title">
					<h2>get in <span>touch</span></h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-5">
				<div class="contact-info">
					<h3>For Any Enquiry and Support</h3>
					<div class="contact-info-item">
						<i class="fas fa-location-arrow"></i>
						<h4>Company Address</h4>
						<p> Abuja, Lagos, Port Harcourt</p>
					</div>
					<div class="contact-info-item">
						<i class="fas fa-envelope"></i>
						<h4>Write to us at</h4>
						<p>info@pihub.com</p>
					</div>
					<div class="contact-info-item">
						<i class="fas fa-phone"></i>
						<h4>Call Us on</h4>
						<p>+234 12345678</p>
					</div>
				</div>
			</div>
			<div className="col-lg-8 col-md-7">
  <div className="contact-form">
    <form>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input type="text" placeholder="Your Email" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <input type="text" placeholder="Your Phone Number" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <input type="text" placeholder="Subject" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <button type="submit" className="btn btn-1">Send Message</button>
        </div>
      </div>
    </form>
  </div>
</div>

		</div>
	</div>	
</section>


      </React.Fragment>
    );
}
