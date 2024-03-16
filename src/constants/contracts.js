import { ethers } from "ethers";
import Abi from "./stakeAbi.json";

export const getContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_contract_address,
    Abi,
    providerOrSigner
  );

export const getStakeTokenContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_stake_token_address,
    Abi,
    providerOrSigner
  );
