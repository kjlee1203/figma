import StockPanel from "./StockPanel";
import "./MyStock.css";
//import {data} from './mockData';
import {stockData} from './stockData';
import chevRight from "../../../public/chevright.png";
import chevLeft from "../../../public/chevleft.png";



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

      <div>How to Scroll Horizontally in React JS - Styled With Tailwind CSS
        <div className='relative flex items-center'>
            <img 
              className='w-5 opacity-50 cursor-pointer hover:opacity-100'
              src={chevLeft} onClick={slideLeft}
            />
            <div 
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
            >
                <div 
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                >
                    <StockPanel nvidia="Apple"/>
                </div>

                <div 
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                >
                    <StockPanel nvidia="Tesla Inc"/>
                </div>



                {stockData.map((item) => (
                     <img
                     className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                     src={item.img}
                     alt='/'
                     />

                ))}
                

            </div>
            <img 
              className='w-5 opacity-50 cursor-pointer hover:opacity-100'
              src={chevRight} onClick={slideRight}
            />
        </div>


      </div>


      <h3 className="my-stock">My Stock</h3>
      <nav className="card-container">
        
        <StockPanel
          nvidia1="/teslamotors1-1.svg"
          nvidia="Tesla Inc"
          nVDA="TSLA"
          amPmIndicator="+17.63"
          lineFrameLineMFrameY="$177.90"
          group3="/group-3-2@2x.png"
          propBackgroundColor="#ffe5a5"
          propPadding="var(--padding-base) var(--padding-xs)"
          propPadding1="unset"
          propWidth="62px"
          propColor="#2c2c2c"
          propColor1="#2c2c2c"
          propColor2="#77b900"
          propColor3="#838383"
          propColor4="#2c2c2c"
        />

        <div className="income-expenses1">
          <div className="frame-parent">
            <div className="frame-group">
              <div className="px-apple-logo-black-1-parent">
                <img
                  className="px-apple-logo-black-1-icon"
                  alt=""
                  src="/391pxapple-logo-black-1@2x.png"
                />
                <img
                  className="px-apple-logo-black-2-icon"
                  alt=""
                  src="/391pxapple-logo-black-2@2x.png"
                />
              </div>
              <div className="apple-inc">Apple Inc</div>
            </div>
            <div className="aapl-parent">
              <div className="aapl">AAPL</div>
              <div className="div2">+23.41</div>
            </div>
          </div>
          <div className="frame-container">
            <div className="current-value-parent">
              <div className="current-value1">Current Value</div>
              <div className="div3">$145.93</div>
            </div>
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/group-3-2@2x.png"
            />
          </div>
        </div>
        <div className="open-prev-close-avg-days">
          <div className="group-header-footer">
            <img
              className="amd-logo-1-1-icon"
              loading="lazy"
              alt=""
              src="/amdlogo1-1.svg"
            />
            <div className="current-value2">Current Value</div>
            <div className="monthly-budget-graphic">$75.40</div>
            <img
              className="group-header-footer-child"
              alt=""
              src="/group-3-4.svg"
            />
            <div className="frame-div">
              <div className="amd-wrapper">
                <div className="amd">AMD</div>
              </div>
              <div className="advanced-micro-devices">
                Advanced Micro Devices, Inc.
              </div>
              <div className="wrapper">
                <div className="div4">-2.01</div>
              </div>
              <div className="frame-item" />
            </div>
          </div>
          <div className="arrow-right-wrapper">
            <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyStock;
