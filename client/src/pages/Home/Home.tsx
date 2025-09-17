import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import './Home.css'
import errorImg from '../../assets/404.jpg'

interface Product {
  _id: string,
  name: string,
  image: string,
  isFeatured: boolean
}

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/product/featured-products");
        setFeaturedProducts(res.data.featuredProducts);

      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm: ", error);
      }
    }

    fetchFeaturedProducts();
  }, []);
  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Cột trái */}
        <Col md={2}>
          <div className="sidebar-menu bg-light p-3 shadow-sm rounded">
            <ul className="list-unstyled m-0">
              <li className="mb-2 p-2" style={{cursor: 'pointer'}}>
                <i className="fas fa-gamepad me-2"></i>
                Game Steam
              </li>

              <li className="mb-2 p-2" style={{cursor: 'pointer'}}>
                <i className="fab fa-playstation me-2"></i>
                Game Playstaion
              </li>

              <li className="mb-2 p-2" style={{cursor: 'pointer'}}>
                <i className="fas fa-dice me-2"></i>
                Game Nintendo
              </li>
            </ul>
          </div>
        </Col>

        {/* Cột giữa - Carousel chính */}
        <Col md={7}>
          <div className="main-carousel-container position-relative">
            {featuredProducts.length > 0 ? (
              <Carousel
                fade
                interval={4000}
                controls={true}
                indicators={true}
                className="main-carousel"
              >
                {featuredProducts.slice(0, 5).map((product) => (
                  <Carousel.Item
                    key={product._id}
                    className="carousel-item-custom"
                  >
                    <div className="carousel-image-container">
                      <img
                        className="d-block w-100 carousel-image"
                        src={product.image}
                        alt={product.name}
                      />

                      {/* Overlay gradient */}
                      <div className="carousel-overlay"></div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Carousel className="main-carousel">
                <Carousel.Item>
                  <div className="carousel-image-container">
                    <img
                      className="d-block w-100 carousel-image"
                      src={errorImg}
                      alt=""
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            )}
          </div>
        </Col>

        {/* Cột phải */}
        <Col md={3}>
          <div className="d-flex flex-column">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
