import Topbar from "./tools/topbar";
import Search from './tools/search'
import Table from './tools/table'
import NotearchiveConfig from "./notearchiveConfig"

export default function Home() {
    return (
        <div>
            <NotearchiveConfig>
                <Topbar/>
                <Search/>
                <Table/>
            </NotearchiveConfig>
        </div>
    )
}