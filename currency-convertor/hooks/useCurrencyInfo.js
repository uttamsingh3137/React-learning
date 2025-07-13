import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://www.floatrates.com/daily/usd.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data;
}

export default useCurrencyInfo;
