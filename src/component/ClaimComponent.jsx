import { Button} from "@radix-ui/themes";
import useClaimRewards from "../hooks/useClaimReward";

const ClaimComponent = ({ poolId }) => {

  const handleClaim = useClaimRewards(poolId);
//   console.log(poolId);
  return (
    <Button className="bg-green-600  p-3 mt-4" onClick={handleClaim}>
      Claim Rewards
    </Button>
  );
};

export default ClaimComponent;
