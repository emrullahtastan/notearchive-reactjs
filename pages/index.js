import Topbar from "./tools/topbar";
import Search from './tools/search'
import Table from './tools/table'
import NotearchiveConfig from "./notearchiveConfig"
import {useState} from "react";

export default function Home() {

    const [searchValue, setSearchValue] = useState();

    function search(value) {
        setSearchValue(value);
    }

    return (
        <div>
            <NotearchiveConfig>
                <Topbar/>
                <Search onChangeEventHandler={search}/>
                <Table searchValue={searchValue}/>
            </NotearchiveConfig>
        </div>
    )
}