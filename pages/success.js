import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

function success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for your order!</h2>
        <p className="email-msg"> Check your inbox for reciept</p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default success;
