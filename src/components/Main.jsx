import FumettiComics from "./FumettiComics"

const Main = () =>{
    return(

        <main>
            
            <FumettiComics />
           
            


            <section className="market">
            <div className="container">
                <div className="market-top">
                    <a href="#">
                    <img src="/img/buy-comics-digital-comics.png" alt="" />
                    <h3>DIGITAL COMICS</h3>
                    </a>
                </div>

                <div className="market-top">
                    <a href="#">    
                    <img src="/img/buy-comics-merchandise.png" alt="" />
                    <h3>DC MERCHANDISE</h3>
                    </a>
                </div>

                <div className="market-top">
                    <a href="#">
                    <img src="/img/buy-comics-subscriptions.png" alt="" />
                    <h3>SUBSCRIPTION</h3>
                    </a>
                </div>

                <div className="market-top">
                    <a href="#">
                    <img src="/img/buy-comics-shop-locator.png" alt="" />
                    <h3>COMIT SHOP LOCATOR</h3>
                    </a>
                </div>

                <div className="market-top">
                    <a href="#">
                    <img src="/img/buy-dc-power-visa.svg" alt="" />
                    <h3>DC POWER VISA</h3>
                    </a>
                </div>

                
            </div>
            </section>
        </main>
    )
}

export default Main