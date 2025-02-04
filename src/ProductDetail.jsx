import React, { useState } from "react"; // Impor useState
import { Link } from "react-router-dom"; // Impor Link dari React Router
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";

const ProductDetail = () => {
  // State untuk gambar utama dan gambar kecil
  const [imageSrc, setImageSrc] = useState("asset/eggProduct.png"); // Gambar utama default
  const [hoveredImage, setHoveredImage] = useState({
    egg: false,
    carrot: false,
    cat: false,
  }); // State untuk gambar kecil yang di-hover

  // Gaya inline untuk styling tombol
  const inlineStyles = {
    productInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
    productPrice: {
      fontSize: "1.5rem",
      color: "#FF5722",
      margin: "10px 0",
    },
    addToCartButton: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    orderNowButton: {
      backgroundColor: "#FF5722",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  // Fungsi untuk mengganti gambar utama saat hover
  const handleMouseEnter = () => {
    setImageSrc("asset/eggHover.png"); // Ganti gambar utama saat hover
  };

  // Fungsi untuk mengembalikan gambar utama saat mouse leave
  const handleMouseLeave = () => {
    setImageSrc("asset/eggProduct.png"); // Kembalikan gambar utama ke default
  };

  // Fungsi untuk mengganti gambar kecil saat hover
  const handleSmallImageMouseEnter = (image) => {
    setHoveredImage((prev) => ({
      ...prev,
      [image]: true, // Gambar yang di-hover menjadi true
    }));
  };

  // Fungsi untuk mengembalikan gambar kecil saat mouse leave
  const handleSmallImageMouseLeave = (image) => {
    setHoveredImage((prev) => ({
      ...prev,
      [image]: false, // Reset gambar yang di-hover menjadi false
    }));
  };

  return (
    <div>
      <div className="header">
        <img src="/asset/estilo-logo.png" alt="Estilo Logo" className="logo-img" />
        <nav className="navbar">
          <Link to="/">Home</Link> {/* Link ke halaman utama */}
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="product-detail">
        <div className="product-image">
          {/* Gambar utama */}
          <img
            src={imageSrc} // Gambar utama berdasarkan state
            alt="Product"
            onMouseEnter={handleMouseEnter} // Ganti gambar utama saat hover
            onMouseLeave={handleMouseLeave} // Kembalikan gambar utama saat mouse leave
          />
          <div className="product-variation">
            {/* Gambar kecil yang dapat di-hover */}
            <img
              src={hoveredImage.egg ? "asset/egghover.png" : "asset/eggProduct.png"} // Cek hover untuk gambar pertama
              alt="Variation 1"
              onMouseEnter={() => handleSmallImageMouseEnter("egg")} // Ganti gambar saat hover
              onMouseLeave={() => handleSmallImageMouseLeave("egg")} // Kembalikan gambar saat mouse leave
            />
            <img
              src={hoveredImage.carrot ? "asset/carrothover.png" : "asset/carrotProduct.png"} // Cek hover untuk gambar kedua
              alt="Variation 2"
              onMouseEnter={() => handleSmallImageMouseEnter("carrot")}
              onMouseLeave={() => handleSmallImageMouseLeave("carrot")}
            />
            <img
              src={hoveredImage.cat ? "asset/mushroomhover.png" : "asset/catProduct.png"} // Cek hover untuk gambar ketiga
              alt="Variation 3"
              onMouseEnter={() => handleSmallImageMouseEnter("cat")}
              onMouseLeave={() => handleSmallImageMouseLeave("cat")}
            />
          </div>
        </div>
        <div className={styles.productInfo}>
          <h1 className="product-title">Cat Toys</h1>
          <p style={inlineStyles.productPrice}>Rp. 300.000</p>
          <div className="product-rating">
            <span className="rate">★★★★★</span>
          </div>
          <div className="product-size">
            <label className="size-label">Bentuk: </label>
            <select className="size-select">
              <option value="41">Egg Scratcher</option>
              <option value="42">Mushroom Scratcher</option>
              <option value="43">Carrot Scratcher</option>
            </select>
          </div>
          <div className="product-quantity">
            <label className="quantity-label">Jumlah: </label>
            <input type="number" min="1" defaultValue="1" className="quantity-input" />
          </div>
          <div className="product-buttons">
            <button style={{ ...inlineStyles.addToCartButton, borderRadius: "20px" }}>
              Tambah ke Keranjang
            </button>
            <button style={{ ...inlineStyles.orderNowButton, borderRadius: "20px" }} className="pesan-button">
              Pesan
            </button>
          </div>

          <div className="product-description">
            <h2>Deskripsi Produk</h2>
            <p>
              Scratcher Kucing dengan bentuk lucu seperti Egg, Carrot, dan Mushrooms. Aman, tahan lama, melindungi furnitur,
              dan membuat kucing Anda tetap aktif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
