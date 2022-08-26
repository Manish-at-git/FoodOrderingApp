import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/pizza.png", "/img/pizza.png", "/img/pizza.png"];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <div
              style={{
                marginLeft: "200px",
                marginTop: "200px",
                maxWidth: "300px",
                textAlign: "center",
                color:"white",
              }}
            >
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                Hot and Spicy
              </div>
              <div
                style={{
                  fontSize: "100px",
                  fontWeight: 600,
                }}
              >
                PIZZA
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                }}
              >
                50% OFF
              </div>
              <div style={{ fontSize: "30px", fontWeight: "500" }}>
                ORDER NOW
              </div>
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                Buy 1 and Get 1 FREE! at just $2.99
              </div>
            </div>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
