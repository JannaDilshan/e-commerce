import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function footer() {
  return (
    <MDBFooter  style={{ backgroundColor: '#f1f1f1' }} className="text-center text-lg-start text-muted ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />E
                -Commerce
              </h6>
              <p>
                Classique offers stylish and luxurious watches made with Swiss
                movements and high-quality materials. Choose from our beautiful
                dress watches, available with or without sparkling diamonds, to
                match any style and taste.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/products" className="text-reset">
                  All Categories
                </a>
              </p>
              <p>
                <a href="/products?category=Diver" className="text-reset">
                  Diver
                </a>
              </p>
              <p>
                <a href="/products?category=Classic" className="text-reset">
                  Classic
                </a>
              </p>
              <p>
                <a href="/products?category=Modern" className="text-reset">
                  Modern
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/products" className="text-reset">
                  Products
                </a>
              </p>
              <p>
                <a href="/cart" className="text-reset">
                  Cart
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Sri Lanka, Western Province, Colombo
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <a
                  href="mailto:janithtk2000@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "#757575",
                    opacity: "1",
                  }}
                >
                  janithtk2000@gmail.com
                </a>
              </p>

              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <a
                  href="tel:+94754967408"
                  style={{
                    textDecoration: "none",
                    color: "#757575",
                  }}
                >
                  +94 754 967 408
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          E-Commerce
        </a>
      </div>
    </MDBFooter>
  );
}
export default footer;
