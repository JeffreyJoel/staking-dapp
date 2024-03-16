
import { useEffect, useState } from "react";
import { getContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
// import { decodeBytes32String } from "ethers";

const useGetPools = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const contract = getContract(readOnlyProvider);
    contract
      .getPoolByID(0)
      .then((res) => {
        setPools((prev) => [...prev, res]);

        console.log(res);
      })
      .catch((err) => {
        console.error("error fetching pools: ", err);
        // setProposal((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return pools;
};

export default useGetPools;