import { Button} from "@radix-ui/themes";
import useUnstake from "../hooks/useUnstake";

const UnstakeComponent = ({ poolId }) => {

  const handleUnStake = useUnstake(poolId);
  console.log(poolId);
  return (
    <Button className="bg-red-600" onClick={handleUnStake}>
      Stake
    </Button>
  );
};

export default UnstakeComponent;
