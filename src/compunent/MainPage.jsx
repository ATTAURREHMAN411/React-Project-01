
import Buttons from "./buttons"

const MainPage = ()=>{
  return(
    <>
    <div className="main">
        <div className="main-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="main-Btn">
            <Buttons tittle="shop Now" bgColor="#d01c28" />
            <Buttons tittle="Category" />
        </div>
        <div className="shoping">
        <p>Also Available On</p>
        <div className="brandIcons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
        </div>
        </div>
        </div>
        
       <div className="main-image">
       <img src="/images/hero-image.png" alt="" />
       </div>
    </div>
    
    </>
  )
}

export default MainPage
























