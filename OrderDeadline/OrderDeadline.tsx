import React from "react";
import styles from "./Order.module.css";
import { headingsData } from "@/mockdata/headingData";
import { styled } from "@mui/system";

const OrderDeadline: React.FC = () => {
  const data = headingsData[0];
  return (
    <>
   <div className={styles.order_card}>
    <div className={styles.next_order}>
    <div className={styles.nextorder_deadline}>
          <div>
            <div className={styles.deadlinedata}>
              <p className={`W-H3 ${styles.next}`}>{data.orderCard1?.headCard1}</p>
              <p className={`W-H3 ${styles.contentCard1}`}>{data.orderCard1?.contentCard1}</p>
              <p className={`W-Body-Large-Regular ${styles.timeCard1}`}>{data.orderCard1?.timeCard1}</p>
            </div>
          </div>
      </div>
        <div className={styles.Freight}>
          
            <div>
              <h2 className="W-H3">{data.orderCard2?.head1}</h2>
              <p className="W-Body-Large-Regular">{data.orderCard2?.detail1}</p>
              <h3 className="W-H3">{data.orderCard2?.head2}</h3>
              <p>{data.orderCard2?.detail2}</p>
              <hr className={styles.hr} />
              <h3 className="W-H3">{data.orderCard2?.head3}</h3>
              <p  className="W-Body-Large-Regular">{data.orderCard2?.detail3}</p>
              <hr className={styles.hr} />
              <h3 className="W-H3">{data.orderCard2?.head4}</h3>
              <p  className="W-Body-Large-Regular">{data.orderCard2?.detail4}</p>
            </div>
         
        </div>
    </div>
        
      </div>

    </>
  );
};

export default OrderDeadline;
