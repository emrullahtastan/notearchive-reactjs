import styles from './index.module.css'

export default function Content() {
    return (<div>
            <div className={styles.app}>
                <div className={"flex flex-col gap-y-8 mt-6 w-3/5"} /*style={{width:"100%"}}*/>
                    <h1 className={styles.topText}>
                        Nota Arşive Hoşgeldiniz!
                    </h1>
                    <div>
                        <input type="text"
                               className={styles.input} placeholder={"Ara"}/>

                    </div>
                    <div>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">Dropdown button <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                                   xmlns="http://www.w3.org/2000/svg">
                        </svg></button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>∫
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                        out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <table className="table-auto text-left w-full">
                            <thead>
                            <tr>
                                <th>Eser Başlık</th>
                                <th>Makam</th>
                                <th>Güfte</th>
                                <th>Beste</th>
                                <th>Form</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>A Dostlar Ne Mutlu Size</td>
                                <td>Uşşak</td>
                                <td>Ahmet Soyyiğit</td>
                                <td>Yahya Soyyiğit</td>
                                <td>İlahi</td>
                            </tr>
                            <tr>
                                <td>A dost sen de gel de bize dost ol</td>
                                <td>Acemaşiran</td>
                                <td>Şeref Çakar</td>
                                <td>Ayşe Feyzioğlu</td>
                                <td>Şarkı</td>
                            </tr>
                            <tr>
                                <td>Aç Gözün Gafletden Uyan</td>
                                <td>Acemaşîrân</td>
                                <td>Cüneyt Kosal</td>
                                <td>Aziz Mahmud Hüdai</td>
                                <td>İlahi</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={styles.pagination}>
                            <ul>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}