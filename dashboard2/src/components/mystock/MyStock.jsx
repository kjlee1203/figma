import StockPanel from "./StockPanel";
import "./MyStock.css";
//import {data} from './mockData';
import {stockData} from './stockData';
import chevRight from "../../../public/chevright.png";
import chevLeft from "../../../public/chevleft.png";
import miniGraphExample from "../../../public/minigraphexample.png";
import teslaLogo from "../../../public/teslamotors1-1.svg";


const MyStock = () => {


    // for the horizontal scroll
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }; 

  return (
    <div className="frame-d-m-lines">
      <h3 className="my-stock">My Stock</h3>

        <div className='relative flex items-center'>
            <img 
              className='w-5 opacity-50 cursor-pointer hover:opacity-100'
              src={chevLeft} onClick={slideLeft}
            />
            <div 
              id='slider' style={{ width: '800px', overflow: 'auto' }}
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'
            >

            {stockData.map((item) => (
              <div 
                     className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              >
                <StockPanel
                  companyIcon={item.img}
                  companyName={item.companyName}
                  ticker={item.ticker}
                  priceChange={item.priceChange}
                  stockPrice={item.stockPrice}
                  miniGraph={miniGraphExample}
                  panelColor={item.panelColor}
                  priceChangeColor={item.priceChangeColor}
                />
              </div>))
            }
                

            </div>
            <img 
              className='w-5 opacity-50 cursor-pointer hover:opacity-100'
              src={chevRight} onClick={slideRight}
            />
        </div>

    </div>
  );
};

export default MyStock;
