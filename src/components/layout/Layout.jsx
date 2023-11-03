import '../../index.css';
import './Layout.css'
import Sidebar from '../sidebar/Sidebar.jsx';
import Test from '../Test.jsx'

export default function Layout() {
    return  (
        <div className="xl2">
            <Sidebar/>
            {/* <Test/> */}
        </div>
    )
}