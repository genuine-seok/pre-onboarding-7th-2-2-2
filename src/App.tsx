import React, { useEffect } from "react";

import { ADServiceImp } from "./apis/ADService";
import { httpClient } from "./apis/api";

const adService = new ADServiceImp(httpClient);

const App = () => {
  const init = async () => {
    const res = await adService.get();
    return res;
    // console.log(res);
  };

  useEffect(() => {
    init();
  }, []);

  return <div>App</div>;
};

export default App;
