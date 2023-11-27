import { Header } from "../../components/Header";
import { ItemQuantityControl } from "../../components/ItemQuantityControl";

export function Home() {
    return (
        <div>
            <Header />
            <ItemQuantityControl isColumn={true}  />
        </div>
    )
}