import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useUnstake = (poolId) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getContract(signer);

    try {
      const transaction = await contract.unstake(poolId);

      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        console.log("Unstake successful!");
        window.location.reload(false);

      }

      console.log("Unstake failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [poolId, chainId, walletProvider]);
};

export default useUnstake;
