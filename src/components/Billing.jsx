import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      {/* left side image */}
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradients */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      {/* right side contents flex-col */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Banks' billing and invoicing systems facilitate payment processing,
          allowing customers to make payments for various services, loans,
          credit cards, utilities, and other financial obligations.
        </p>

        {/* download button  flex-row*/}
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-3">
          <img
            src={apple}
            alt="Apple-logo"
            className="w-[128px] h-[43px] object-contain cursor-pointer border-2 rounded-md"
          />

          <img
            src={google}
            alt="google-logo"
            className="w-[128px] h-[43px] object-contain cursor-pointer border-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
export default Billing;
