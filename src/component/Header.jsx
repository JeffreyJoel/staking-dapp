import useIsCreator from "../hooks/useIsCreator";
import { Flex } from "@radix-ui/themes";
import CreatePoolComponent from "./CreatePool";

export default function Header() {
    const isCreator = useIsCreator();
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-3xl">Stake</h2>
            
            <Flex gap={"4"} align={"center"}>
            {isCreator && <CreatePoolComponent />}
                <w3m-button />
            </Flex>
            
        </div>
    );
}
