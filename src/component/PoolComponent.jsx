import { Flex, Text } from "@radix-ui/themes";
import StakeComponent from "./StakeComponent";
import UnstakeComponent from "./UnstakeComponent";
import ClaimComponent from "./ClaimComponent";

const PoolCard = ({
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
  index,
  //   handleStake,
}) => {
  return (
    <>
      {/* <Card size="2" style={{ width: 425 }} className="mb-3">
        <Flex gap="" align="center">
          <Box width={"100%"}>
            <Flex justify={"between"} direction={"column"} >
              <Text as="div" >
              TotalStakers: {totalStakers}
              </Text>
              <Text as="div" >
              TotalStakedAmount: {totalStakedAmount}
              </Text>
              <Text as="div" >
              RewardReserve: {rewardReserve}
              </Text>
              <Text as="div" >
              RewardRate {rewardRate}
              </Text>{

              }
              <StakeComponent poolId={index}/>
              <UnstakeComponent poolId={index}/>
              {/* <button
                className="text-white bg-blue-600 py-1 px-4 rounded-md"
                onClick={() => handleStake(totalStakers)}
              >
                Stake
              </button> *
            </Flex>
          </Box>
        </Flex>
      </Card> */}

      <div className="text-start max-w-sm p-6 rounded-lg shadow bg-[#222] w-[800px]">
        {/* <h5>Pool #{}</h5> */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pool #{index}</h5>
        <Flex justify={"between"} direction={"column"}>
          <Text as="div" className="text-base  sm:text-lg tracking-tight mb-3">
            Total Stakers: {totalStakers}
          </Text>
          <Text as="div" className="text-base  sm:text-lg tracking-tight mb-3">
            Total Staked Amount: {totalStakedAmount}
          </Text>
          <Text as="div" className="text-base  sm:text-lg tracking-tight mb-3">
            Reward Reserve: {rewardReserve}
          </Text>
          <Text as="div" className="text-base  sm:text-lg tracking-tight mb-3">
            Reward Rate {rewardRate}
          </Text>
          {}
          <StakeComponent poolId={index} />
          <UnstakeComponent poolId={index} />
          <ClaimComponent poolId={index}/>
          {/* <button
                className="text-white bg-blue-600 py-1 px-4 rounded-md"
                onClick={() => handleStake(totalStakers)}
              >
                Stake
              </button> */}
        </Flex>
      </div>
    </>
  );
};

export default PoolCard;
