function footer() {
  return `<div class="footer">
    <div class="footer-column">
        
        <ul class="lo">
            <li><label class="heading">Customer Service</label></li>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Shipping</li>
            <li>Returns &amp; Exchanges</li>
            <li>Price Adjustment</li>
            <li>Gift Cards</li>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Product Recalls</li>
        <ul>
    </div>
    <div class="footer-column">
        <ul class="lo">
            <li><label class="heading">About Us</label></li>
            <li>Carrers</li>
            <li>Corporate social Responsibility</li>
            <li>Diversity Inclusion &amp; Belonging</li>
            <li>Get Email Updates</li>
            <li>Nordstrom Blog</li>
            <li>The Thread</li>
            <li>Nordy Podcast</li>
            
        <ul>
    </div>
    <div class="footer-column">
        <ul class="lo">
            <li><label class="heading">Store & Services</label></li>
            <li>Find a Store</li>
            <li>Altration &amp; Tailoring</li>
            <li>Spa Nordstrom</li>
            <li>Nordstrom Restaurants</li>
            <li>Free Style Help</li>
            <li>Pop-In Shop</li>
            <li>Virtual Events</li>
            <li>Nordstrom Local</li>
            
        <ul>
    </div>
    <div class="footer-column">
        <ul class="lo">
            <li><label class="heading">Nordstrom Card & Rewards</label></li>
            <li>The Nordy Club Rewards</li>
            <li>Pay My Bill</li>
            <li>Manage my Nordstrom Card</li>
            
        <ul>
    </div>
    <div class="footer-column">
        <ul class="lo">
            <li><label class="heading">Nordstrom Inc.</label></li>
            <li>Nordstrom Rack</li>
            <li>Nordstrom Canada</li>
            <li>Investor Relations</li>
            <li>Press Releases</li>
            <li>Nordstrom Media Network</li>
            
        <ul>
    </div>

    <div class="footer-column">
        <ul class="lo">
            <li style="padding:5px"><img src="https://cdn-icons-png.flaticon.com/128/0/191.png" alt="facebook" style="width:18px;margin-right:0px;padding:5px"/>Get our apps</li>
            <div style="display:flex;gap:15px;margin-top: 20px;">
                
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="facebook" style="width:24px;"/>
                <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="facebook" style="width:24px;"/>
                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" alt="facebook" style="width:24px;"/>
                <img src="https://cdn-icons-png.flaticon.com/128/2175/2175205.png" alt="facebook" style="width:24px;"/>
            </div>
        <ul>
    </div>
    

    
    
</div>

<div class="footer" >
    <p>Your Privacy Rights</p>
    <p>Dont Sell My Info</p>
    <p>Terms &amp; Conditions</p>
    <p>Intrest Based Ads</p>
    <p>&copy;2022 Nordstrom,Inc</p>
</div>`;
}
let header = () => {
  return ` 
       
<div id="nav-bar" onmouseenter="removeBar()">
    
        <div id="navs">
        
            <button  id="red" class="navEle" onclick="clickec('Sale')" onmouseover="dropDown('Sale')" onmouseout="dropout()">Sale</button>
            <button class="navEle" onclick="clickec('Women')" onmouseover="dropDown('Women')"  onmouseout="dropout()">Women</button>
            <button class="navEle" onclick="clickec('Men')" onmouseover="dropDown('Men')"  onmouseout="dropout()">Men</button>
            <button class="navEle" onclick="clickec('Kids')" onmouseover="dropDown('Kids')"  onmouseout="dropout()">Kids</button>
            <button class="navEle" onclick="clickec('YoungAdult')" onmouseover="dropDown('YoungAdult')"  onmouseout="dropout()">YoungAdult</button>
            <button class="navEle" onclick="clickec('Activewear')" onmouseover="dropDown('Activewear')"  onmouseout="dropout()">Activewear</button>
            <button class="navEle" onclick="clickec('Home')" onmouseover="dropDown('Home')"  onmouseout="dropout()">Home</button>
            <button class="navEle" onclick="clickec('Gifts')" onmouseover="dropDown('Gifts')"  onmouseout="dropout()">Gifts</button>
            <button class="navEle" onclick="clickec('Beauty')"   onmouseover="dropDown('Beauty')" onmouseout="dropout()">Beauty</button>
            <button class="navEle" onclick="clickec('Designer')"   onmouseover="dropDown('Designer')" onmouseout="dropout()">Designer</button>
            <button class="navEle" onclick="clickec('Brands')" onmouseover="dropDown('Brands')"  onmouseout="dropout()">Brands</button>

            <button id="red" class="navEle" onclick="dropDown('Sale')">Sale</button>
            <button id="Womens_data" class="navEle" onclick="dropDown('Women')">Women</button>

            <button id="mens_data" class="navEle" onclick="dropDown('Men')">Men</button>
            <button id="kids_data" class="navEle" onclick="dropDown('Kids')">Kids</button>
            <button class="navEle" onclick="dropDown('YoungAdult')">YoungAdult</button>
            <button class="navEle" onclick="dropDown('Activewear')">Activewear</button>
            <button class="navEle" onclick="dropDown('Home')">Home</button>
            <button class="navEle" onclick="dropDown('Gifts')">Gifts</button>
            <button class="navEle" onclick="dropDown('Beauty')">Beauty</button>
            <button class="navEle" onclick="dropDown('Designer')">Designer</button>
            <button class="navEle" onclick="dropDown('Brands')">Brands</button>
        <button onclick="removeDropdown()"> <strong>X</strong></button>
            </div>
        <div id="search" onmouseleave="removeSignBar()">
            <div id="one" onmouseenter="searchBar()">
                <div class="img" onmouseenter="removeSignBar()">
                    <img src="https://cdn-icons-png.flaticon.com/128/16/16492.png"></img>
                </div>
                <input id="inputBox" maxlength="200" placeholder="What can we help you find?" type="search"
                    value="">
                <div class="word">
                    <p>Search</p>
                </div>
            </div>
            <div id="two" onmouseenter="removeBar()">
                <p onmouseenter="signBar()" id="login_check">Sign In</p>
                <img src="https://cdn-icons-png.flaticon.com/128/2211/2211057.png"></img>
            </div>
            <div id="signIN" onmouseleave="removeSignBar()">
                <ul>
                    <li>
                        <a href="signin.html">Sign In</a>
                    </li>
                    <li>
                        <a href="signup.html">Create Account</a>
                    </li>
                    <li>
                        <a href=""><span>Your Account</span></a>
                    </li>
                    <li>
                        <a href=""><span>Wish List</span></a>
                    </li>
                    <li>
                        <a href=""><span>Looks</span></a>
                    </li>
                    <li>
                        <a href=""><span>Stores & Events</span></a>
                    </li>
                </ul>
            </div>

        </div>
        
    <div class="clear"></div>
</div>
`;
};
let head1 = () => {
  return `
      <div class="Sale-content">
              <div class="firstDiv">
                  <ul>
                      <li id="saleIn">
                          <h3 class="mainh3"><a href="">Sale: Get Inspired</a></h3>
                      </li>
                      <hr>
                      <li>
                          <h3><a href="">Bestsellers</a></h3>
                      </li>
                      <li>
                          <h3>
                              <a href="">New Markdowns</a>
                          </h3>
                      </li>
                      <li>
                          <h3>
                              <a href="">Price Matched</a>
                          </h3>
                      </li>
                      <li>
                          <h3>
                              <a href="">Men's Designer Sale</a>
                          </h3>
                      </li>
                      <li>
                          <h3>
                              <a href="">Women's Designer Sale</a>
                          </h3>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>
                          <h3 class="mainh3">
                              <a href="">Women</a>
                          </h3>
                      </li>
                      <li>
                          <a href="">New Markdowns</a>
                      </li>
                      <li>
                          <a href="">Clothing</a>
                      </li>
                      <li>
                          <a href="">Shoes</a>
                      </li>
                      <li>
                          <a href="">Handbags & Wallets</a>
                      </li>
                      <li>
                          <a href="">Jewelry</a>
                      </li>
                      <li>
                          <a href="">Accessories</a>
                      </li>
                      <li>
                          <a href="">Beauty</a>
                      </li>
                      <li>
                          <a href="">Designer</a>
                      </li>
                      <li class="topMargin">
                          <a href="">Plus</a>
                      </li>
                      <li>
                          <a href="">Petite</a>
                      </li>
                      <li>
                          <a href="">Maternity</a>
                      </li>
                      <li>
                          <a href="">Juniors</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>
                          <h3 class="mainh3">
                              <a href="">Men</a>
                          </h3>
                      </li>
                      <li>
                          <a href="">New Markdowns</a>
                      </li>
                      <li>
                          <a href="">Clothing</a>
                      </li>
                      <li>
                          <a href="">Shoes</a>
                      </li>
                      <li>
                          <a href="">Accessories</a>
                      </li>
                      <li>
                          <a href="">Grooming & Cologne</a>
                      </li>
                      <li>
                          <a href="">Designer</a>
                      </li>
                      <li>
                          <h3 class="mainh3">
                              <a href="">Designer</a>
                          </h3>
                      </li>
                      <li>
                          <a href="">Women</a>
                      </li>
                      <li>
                          <a href="">Men</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>
                          <h3 class="mainh3">
                              <a href="">Kids</a>
                          </h3>
                      </li>
                      <li>
                          <a href="">New Markdowns</a>
                      </li>
                      <li>
                          <a href="">Girls</a>
                      </li>
                      <li>
                          <a href="">Boys</a>
                      </li>
                      <li>
                          <a href="">Baby</a>
                      </li>
                      <li>
                          <a href="">Baby Gear & Essentials</a>
                      </li>
                      <li>
                          <a href="">Shoes</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li>
                          <h3 class="mainh3">
                              <a href="">Home</a>
                          </h3>
                      </li>
                      <li>
                          <a href="">New Markdowns</a>
                      </li>
                      <li>
                          <a href="">Bedding & Bath</a>
                      </li>
                      <li>
                          <a href="">Home Decor</a>
                      </li>
                      <li>
                          <a href="">Electronics & Tech Accessories</a>
                      </li>
                      <li>
                          <a href="">Luggage & Travel</a>
                      </li>
                      <li>
                          <a href="">Tabletop & Kitchen</a>
                      </li>
                      <li>
                          <h3 class="mainh3"><a href="">Beauty</a></h3>
                      </li>
                  </ul>
              </div>
              <div class="marginRem">
              <button onclick="dropOOut()">X</button>
                  <div>
                      <div>
                          <a href="">
                              <div>
                                  <img src="https://n.nordstrommedia.com/id/faae0c02-a9a9-427d-b69e-ce5fbd38e500.png">
                              </div>
                          </a>
                      </div>
                      <div>
                          <a class="decor" href="">New Markdowns</a>
                          <hr>
                      </div>
                  </div>
              </div>`;
};

export { footer, header, head1 };
