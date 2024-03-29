import { Button} from "@radix-ui/themes";
import useUnstake from "../hooks/useUnstake";

const UnstakeComponent = ({ poolId }) => {

  const handleUnStake = useUnstake(poolId);
//   console.log(poolId);
  return (
    <Button className="bg-red-600  p-3 mt-4" onClick={handleUnStake}>
      Unstake
    </Button>
  );
};

export default UnstakeComponent;
