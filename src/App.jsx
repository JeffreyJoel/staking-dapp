import { Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
// import CreatePoolComponent from "./component/CreatePool";
// import useGetPool from "./hooks/useGetPools";
import PoolCard from "./component/PoolComponent";
import useGetAllPools from "./hooks/useGetAllPools";

configureWeb3Modal();

function App() {
  const allPools = useGetAllPools();
  console.log(allPools);

  return (
    <Container>
      <Header />
      <main className="mt-12">
        {/* <CreatePoolComponent /> */}
        {allPools.map((pool, poolIndex) => (
          <div key={poolIndex}>
            {pool.map((item, itemIndex) => (
              <PoolCard
                key={itemIndex}
                index={poolIndex}
                totalStakers={Number(item[0])}
                totalStakedAmount={Number(item[1])}
                rewardReserve={Number(item[2])}
                rewardRate={Number(item[3])}
                // Assuming PoolCount is a property of each item
                // PoolCount={Number(item.PoolCount)}
              />
            ))}
          </div>
        ))}
      </main>
    </Container>
  );
}

export default App;

// there should be a way we can name arrays

// Combining all pools into one array

// destructure it and give them names