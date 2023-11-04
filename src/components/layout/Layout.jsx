import './Layout.css'
import Home from '../home/Home'

const Layout = () => {
  return (
    <div className="layout">
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Home/>
        
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
        
      </div>
    </div>
  )
}

export default Layout
