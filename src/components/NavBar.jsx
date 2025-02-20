const NavBar = (props) => {

    

    return(
        <nav>
            <ul>
                {
                    props.links.map( ( link) =>{

                        const {id, href, text} = link;

                        return (
                            <li key={ id} >
                                {/* className={ current ? 'active' : '' }  non funziona mettendo nel tag LI  */}
                                <a href={href}>
                                {text} 
                                </a>   
                            </li>
                        )
                    }
                        
                    
                )
                }
                    
                    
                
            </ul>
        </nav>
    )
}

export default NavBar
