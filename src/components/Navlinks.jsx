import { NavLink } from "react-router-dom";

const urls = [

    { id: 1, url : "/", text : "home" },
    { id: 2, url : "/shop", text : "shop" },
    { id: 3, url : "/about", text : "about" },
    { id: 4, url : "/blog", text : " blog"},
    { id: 5, url : "/contact", text : "contact" },
    { id: 6, url : "/pages", text : "pages" },
];

const Navlinks = () => {
    
    return (
        <>
    {urls.map((link) => { 
        const {id,url, text } = link;
     return (
     <li key={id}>
        <NavLink className="capitalize" to={url}>
            {text}
        </NavLink>
     </li>
     );
    })
    }
    

    </>
    );
}

export default Navlinks;