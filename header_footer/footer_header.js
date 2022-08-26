function footer(){
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
</div>`
}
let header=()=>{
    return ` <div id="top1">
    <div>
        <p>
            <strong>Pick Up Today-in store or curbside.</strong>
            <a title="Learn About International Shipping" href="">Pickup Option</a>
        </p>
        <button href=""><img src="https://n.nordstrommedia.com/alias/IN.gif"><span>India</span></button>
    </div>
    <div class="clear"></div>
</div>
<div id="nav-bar" onmouseenter="removeBar()">
    <div id="inside-div">
        <div id="logo">
            <a style="width: 15%;" href="header.html"><img style="width:100px" src="https://logos-marques.com/wp-content/uploads/2020/09/Nordstrom-logo.png"></a>
        </div>
        <div id="navs">
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
                <p onmouseenter="signBar()">Sign In</p>
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
    </div>
    <div class="clear"></div>
</div>
<div id="main-content">
    <div class="Sale-content">
        <div>
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
            </div>
        </div>
    </div>


    <div class="Women-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Men-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Kids-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="YoungAdult-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Activewear-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Home-content">
        <div>
            <div class="firstDiv">
                <ul>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Home: Get Inspired</a>
                        </h3>
                    </li>
                    <hr>
                    <li>
                        <h3>
                            <a href="">New Arrivals</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">
                                Black-Owned & Founded Brands
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Dorm Room Essentials</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Gift Cards</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">GOODEE</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Home Looks</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Nordstrom Made</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Personalized Shop</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Pop-In: Disney Mickey & Friends</a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a href="">Sustainable Style</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Bath</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Bath Accessories</a>
                    </li>
                    <li>
                        <a href="">Towels</a>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Bedding</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Bedding Basics</a>
                    </li>
                    <li>
                        <a href="">Bedding Sets</a>
                    </li>
                    <li>
                        <a href="">Blankets & Throws</a>
                    </li>
                    <li>
                        <a href="">Comforters & Quilts</a>
                    </li>
                    <li>
                        <a href="">Duvet Covers & Shams</a>
                    </li>
                    <li>
                        <a href="">Sheets & Bed Skirts</a>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Electronics & Music</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Headphones</a>
                    </li>
                    <li>
                        <a href="">Home Devices</a>
                    </li>
                    <li>
                        <a href="">Speakers & Home Audio</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Home Decor</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Accent Furniture</a>
                    </li>
                    <li>
                        <a href="product_grid.html">Art, Wall Decor & Mirrors</a>
                    </li>
                    <li>
                        <a href="">Books, Games & Puzzles</a>
                    </li>
                    <li>
                        <a href="">Candles & Diffusers</a>
                    </li>
                    <li>
                        <a href="">Decorative Accents</a>
                    </li>
                    <li>
                        <a href="">Decorative Pillows</a>
                    </li>
                    <li>
                        <a href="">Desk Accessories & Stationery</a>
                    </li>
                    <li>
                        <a href="">Jewelry Boxes & Holders</a>
                    </li>
                    <li>
                        <a href="">Lighting & Lamps</a>
                    </li>
                    <li>
                        <a href="">Picture Frames</a>
                    </li>
                    <li>
                        <a href="">Rugs</a>
                    </li>
                    <li>
                        <a href="">Throw Blankets</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Kitchen</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Bar Accessories</a>
                    </li>
                    <li>
                        <a href="">Coffee & Tea Accessories</a>
                    </li>
                    <li>
                        <a href="">Cookware & Bakeware</a>
                    </li>
                    <li>
                        <a href="">Cutlery</a>
                    </li>
                    <li>
                        <a href="">Kitchen Linens</a>
                    </li>
                    <li>
                        <a href="">Small Appliances</a>
                    </li>
                    <li>
                        <a href="">Storage & Gadgets</a>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Tabletop</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Dinnerware</a>
                    </li>
                    <li>
                        <a href="">Drinkware & Glassware</a>
                    </li>
                    <li>
                        <a href="">Flatware</a>
                    </li>
                    <li>
                        <a href="">Serveware</a>
                    </li>
                    <li>
                        <a href="">Table Linens</a>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Water Bottles & Tumblers</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Pantry</a>
                        </h3>
                    </li>
                    <li>
                        <a href="">Candy</a>
                    </li>
                    <li>
                        <a href="">Coffee & Tea</a>
                    </li>
                    <li>
                        <a href="">Gift Sets</a>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Luggage & Travel</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Outdoor Living</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Pet Accessories</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="mainh3">
                            <a href="">Sanitizers & Personal Care</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <div class="marginRem">
                <div>
                    <div>
                        <a href="">
                            <div>
                                <img src="https://n.nordstrommedia.com/id/4e7d9382-fd6b-4697-b1f3-ceeddf0a63aa.jpg">
                            </div>
                        </a>
                    </div>
                    <div>
                        <a class="decor" href="">Explore the Trend</a>
                        <hr>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="Gifts-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Beauty-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Designer-content">
        <div>
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
            </div>
        </div>
    </div>

    <div class="Brands-content">
        <div>
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
            </div>
        </div>
    </div>
</div>`
}
export {footer, header}