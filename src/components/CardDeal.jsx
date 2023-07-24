import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section}>
    {/* left side section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Credit card marketing efforts aim to streamline the application process,
        making it quick and convenient for potential customers to apply for a
        credit card.
      </p>
      <Button styles="mt-10" />
    </div>

    {/* Right side section */}
    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);
export default CardDeal;
