import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      ` https://v6.exchangerate-api.com/v6/6520debcb213d6409cc2084f/latest/${currency}.json`
    )
      .then((res) => res.json())
      .then((info) => setData(info));
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
