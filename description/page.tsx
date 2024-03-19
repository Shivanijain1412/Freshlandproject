import React from "react";
import { Grid } from "@mui/material";
import styles from "./Description.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ProductList from "../../atoms/ProductList/ProductList";
import Header from "@/components/atoms/Header/Header";
import TextWrapper from "@/components/atoms/TextWrapper/TextWrapper";
import Button from "@/components/atoms/Button/Button";

const Description = () => {
  return (
    <>
      <Header />
      <div className={styles.containerFluid}>
        <div className={styles.navBack}>
          <KeyboardArrowLeftIcon />
          <p>Go Back</p>
        </div>
        <section className={styles.productSection}>
          <h3 className={`${styles.productTitleMob}`}>
            Economy Oranges(8Kg) 🇪🇸 <br /> <span>DDK159</span>
          </h3>
          <div className={styles.leftSide}>
            <div className={styles.smallImage}>
              <img src="/ImageData/productTop.png" alt="Small Image" />
            </div>
            <div className={styles.mainImage}>
              <img src="/ImageData/Economy_orange.png" alt="Main Image" />
            </div>
          </div>
          <div className={styles.rightSide}>
            <h3 className={`W-H3 ${styles.productTitle}`}>
              Economy Oranges(8Kg) 🇪🇸 <br /> <span>DDK159</span>
            </h3>

            <div className={styles.descriptionWrapper}>
              <span>📦 Free shipping on orders over DDK 699</span>

              <span>
                ⏰ Order before Wednesday at midnight and have your goods
                delivered directly to your door the following week 🚛
              </span>
            </div>
            <div className={styles.boxWrapper}>
              <div className={styles.textWrapper}>
                <TextWrapper text="A whole 8 kg of organic oranges from Andalucia 🍊" />
              </div>
              <div className={styles.textWrapper}>
                <TextWrapper text="Note: The lemons are class 2, so surface scratches may occur" />
              </div>
              <div className={styles.rightButtonWrapper}>
                <div className={`${styles.textWrapper}`}>
                  <TextWrapper text="Store cool at 4-8°C 🌡️" />
                </div>
                <div className={`${styles.textWrapper}`}>
                  <TextWrapper text="Lasts up to 4 weeks 🏡" />
                </div>
              </div>
            </div>
            <div className={styles.boxWrapper}>
              <div className={styles.purchaseBtnWrapper}>
                <button
                  className={`M-Caption-Bold ${styles.oneTimePurchaseButton}`}
                >
                  One Time Purchase
                </button>
                <button className={` M-Caption-Bold ${styles.subscribeButton}`}>
                  Subscribe
                </button>
              </div>
              <div className={`M-Body-Large ${styles.basketWrapper}`}>
                <div className={styles.addToBasket}>
                  <button
                    className={`${styles.valueButton} ${styles.decreaseButton}`}
                  >
                    -
                  </button>
                  <p className={styles.number}>1</p>
                  <button
                    className={`${styles.valueButton} ${styles.increaseButton}`}
                  >
                    +
                  </button>
                </div>
                <span>Add To Basket</span>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------- */}
        {/* Product Description  */}
        <section className={styles.productDescription}>
          <h2 className="W-H2">DESCRIPTION</h2>
          <div className={styles.mainDescription}>
            <div className={styles.storageWrapper}>
              <h3 className="W-H2">Sweet and juicy organic oranges🍊</h3>
              <span>
                These oranges, due to their size suitable as "juice oranges",
                are full of sweetness and juice.
              </span>
              <br />
              <span>
                The orange has many uses. Take advantage of their juiciness to
                make delicious, freshly squeezed orange juice for your
                breakfast, eat the orange fresh as a snack or on top of your
                yogurt, add it to a salad to add sweetness, juice, and color.
                Because the oranges are 100% organic. You can safely use the
                peel in baked goods, e.g., a chocolate cake or as a flavor
                enhancer in your water, possibly along with lemon and cucumber.
              </span>
            </div>

            <div className={styles.storageWrapper}>
              <h4 className="W-H4">Storage</h4>
              <span>
                Oranges must be stored cool but frost-free and airy for the sake
                of the fruit's freshness. They can last up to 3 weeks in
                refrigerator temperatures up to 4-8C. However, citrus fruits
                taste best when enjoyed at room temperature.
                <br />
                By storing the fruits at different temperatures, you can do your
                part to manage their shelf life in a way that allows you to
                enjoy them all in the best possible way. Some can be
                refrigerated for shelf life, while others can be at room
                temperature to bring out the flavor. Because our citrus fruits
                are completely natural and without surface treatment, they have
                a shorter shelf life than surface-treated fruits but, on the
                other hand, every single part of the fruit can be used - from
                the outside to the inside.
              </span>
            </div>

            <div className={styles.storageWrapper}>
              <h4 className="W-H4">Our Economy range</h4>
              <span>
                One of our big wishes is that good, fresh organic ingredients
                should be more available. It is, among other things, therefore,
                that we work directly with our various farmers, without
                intermediaries. Our economy boxes offer larger quantities, where
                the content e.g. may vary slightly more in size - but they still
                go through the same quality as all other products in our range.
                The economy boxes are perfect for sharing with others and are
                also obvious if you like to pickle, bake, ferment. Delicious,
                freshly harvested ingredients that inspire in the kitchen and
                create joy on the dining table.
              </span>
            </div>

            <div className={styles.storageWrapper}>
              <h4 className="W-H4">Season</h4>
              <span>
                These oranges thrive in the summer, but exactly how long we can
                enjoy is hard to say. The orange season usually kicks off during
                late summer.
              </span>
            </div>
            <div className={styles.storageWrapper}>
              <h4 className="W-H4">Nutritional Content</h4>
              <table className={styles.tableData}>
                <tbody>
                  <tr>
                    <td>Average Values</td>
                    <td>Per 100 g</td>
                  </tr>
                  <tr>
                    <td>Energy</td>
                    <td>197 kg (47 kcal)</td>
                  </tr>
                  <tr>
                    <td>fat of which:</td>
                    <td>0.2 g</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Saturated fatty acids</span>
                    </td>
                    <td>
                      <span>0 g</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Monounsaturated fatty acids</span>
                    </td>
                    <td>
                      <span>197 kg (47 kcal)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Polyunsaturated fatty acids</span>
                    </td>
                    <td>
                      <span>197 kg (47 kcal)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Carbohydrate, of which:</td>
                    <td>11.8 g</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Sugars</span>
                    </td>
                    <td>
                      <span>9.8 g</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Dietary fiber</span>
                    </td>
                    <td>
                      <span>2.4 g </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>0.9 g</td>
                  </tr>
                  <tr>
                    <td>Salt</td>
                    <td>0 g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className={styles.productData}>
          <ProductList cardHeading="Related Items" />
        </section>
      </div>
    </>
  );
};

export default Description;
