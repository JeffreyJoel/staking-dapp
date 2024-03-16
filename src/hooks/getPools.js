import { useEffect, useState } from "react";
import { getContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
// import { decodeBytes32String } from "ethers";

const usePools = () => {
    const [pools, setPools] = useState([]);

    // TODO: add each new to an array of pools.


    useEffect(() => {
        const contract = getContract(readOnlyProvider);

        contract
            .getPoolByID(0)
            .then((res) => {
              console.log(res);
              setPools((prev) => ([...prev]));
            })
            .catch((err) => {
                console.error("error fetching proposals: ", err);
                // setProposal((prev) => ({ ...prev, loading: false }));
            });
    }, []);

    return pools;
};

export default usePools;
