<p align="center"><img src='api/public/img/logo-green-round.png' align="center" height="160px"/></p>

<h1 align="center"> 
    Natours
</h1>

<p align="justify">A page for a travel agency startup built on top of NodeJS and NextJS, here is the <a href="https://mern-natours.herokuapp.com/">live version</a></p>

<ul>
    <li>
        <a href="#description">Description</a>
    </li>
    <li>
        <a href="#requirements">Few Requirements</a>
    </li>
     <li>
        <a href="#key-features">Key Features</a>
    </li>
     <li>
        <a href="#how-to-use">How To Use</a>
    </li>
     <li>
        <a href="#api-usage">API Usage</a>
    </li>
    <li>
        <a href="#enviroment-variables">Enviroment Variables</a>
    </li>
    <li>
        <a href="#build-with">Build With</a>
    </li>
    <li>
      <a href="#acknowledgement">Acknowledgement</a>
    </li>
</ul>

<h1 id="description">Description</h1>

<p align="justify">
Natours is an application where the API is built with <a href="https://nodejs.org/en/docs/">NodeJS</a> and <a href="https://expressjs.com/">express</a>. the frontend created in <a href="https://nextjs.org/docs/getting-started">Nextjs</a> is served by node. Once you enter the main page, all the tours available in the application will be displayed, each tour has a button that guides you to the details section, in this you can see all the information related to the tour, such as the routes to follow with <a href="https://docs.mapbox.com/mapbox-gl-js/api/">mapboxgl</a> and user reviews, at the end you will find a section to buy the tour with your credit card using <a href="https://stripe.com/docs/payments/checkout">stripejs checkout</a>, to access the application you can use the route <b>/login</b> or <b>/signup</b>. All authentication and authorization is handled with <a href="https://jwt.io/">JWT</a> and cookies.
</p>

<h1 id="requirements">Few Requirements</h1>

<ul>
    <li><a href="https://nodejs.org/">NodeJS >= 12.x</a></li>
    <li><a href="https://www.npmjs.com/">npm >= 6.x</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
</ul>


<h1 id="key-features">Key Features</h1>

 <ul>
      <li>Authentication and Authorization <ul><li>Sign up, Log in and Log out</li></ul></li>
      <li>Tour<ul><li>See tour guides, check the tour route with maps, check user reviews, ratings and book the tour</li></ul></li>
      <li>User Profile <ul><li>Update username, photo, email and password</li></ul></li>
      <li>Credit card payment</li>
 </ul>
   
<h1 id="how-to-use">How To Use</h1>
<h2>Book a tour</h2>
<ul>
    <li>Log in to the site.</li>
    <li>Choose the tour you like the most.</li>
    <li>Book a tour.</li>
    <li>You will be redirected to the payment page.</li>
    <li>Enter the card details (Stripe is in test mode).</li>
<pre>
- Card No: 4242 4242 4242 4242
- Expiry date: 02 / 24
- CVV: 222
</pre>
</ul>

<h2>Manage your booking</h2>
<ul>
    <li>On the account settings page, you will find a button in the "Manage Booking" navigation that will show you the tours you have booked.</li>
</ul>

<h2>Update your profile</h2>
<ul>
    <li>On the account settings page, you can update your own username, profile photo, email and password.</li>
</ul>

</div>

<h1 id="api-usage">API usage</h1>

<p align="justify">
    Before using the API, you need to set the variables in your API testing (like Postman or Insomnia) depending on your enviroment.
    <pre>
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or https://www.production.com)
- {{JWT}} with your Json Web Token as value.
    </pre>
</p>

<h2 id="api-features">API Features</h2>
<p align="justify">
    <b>Filtering</b> 👉 You can include filters in the URL by including additional query parameters. To start filtering add a <code>?</code> followed by the query <code>[query]=[value]</code>. If you want to chain several queries in the same call, use & followed by the query.
</p>

<p>For example<code>/api/v1/tours?duration=7&maxGroupSize=15</code></p>

<p align="justify">
    You can use mongoose operators, specifying the operator you want to use encapsulation in brackets in front of the property
</p>
<p>For Example: <code>api/v1/tours?duration[gte]=5&price[lte]=2000</code></p>

<p align="justify">
  <b>Sorting</b> 👉 You can sort results based on a certain field using <code>sort</code>parameter.
</p>

<p>For Example: <code>api/v1/tours?sort=price</code> upward</p>
<p><code>api/v1/tours?sort=-price</code> falling</p>

<p align="justify">
  <b>Limit Fields</b> 👉 You can specify which fields you want to get back in the response using the <code>fields</code> parameter.
</p>
<p>
  For example: <code>api/v1/tours?fields=name</code> the response will return the name field.
</p>
<p>
  <code>api/v1/tours?fields=-guides</code> the response will not return the guides field.
</p>
<p align="justify">
  <b>Pagination</b> 👉 You can select a certain page of the results using the <code>limit</code> parameter to indicate how many results you want per page and the <code>page</code> parameter to indicate the page.
</p>

<p>For exapmle <code>api/v1/tours?page=2&limit=3</code></p>

<p><b>Tours List</b> 👉 return all tours https://mern-natours.herokuapp.com/api/v1/tours</p>
<p><b>Tour Stats</b> 👉 returns the statistics of all tours https://mern-natours.herokuapp.com/api/v1/tours/tours-stats
<p><b>Get Tours Within Radius</b> 👉 It shows the cheapest tours and the ones that are best rated by users https://mern-natours.herokuapp.com/api/v1/tours/top-5-cheap</p>
<p><b>Get Tours Within Radius</b> 👉 You can get tours around a certain area, specifying the coordinates (in the form of lat, lng), the distance and the unit (mi or km)</p>
<p><code>/tours-within/distance/:distance/center/:latlng/unit/:unit</code> 👉 https://mern-natours.herokuapp.com/api/v1/tours/tours-within/distance/200/center/34.371714,%20-117.825382/unit/mi</p>

<h1 id="enviroment-variables">Enviroment Variables</h1>

<h2>Server and Database Keys</h2>
<ol>
    <li>NODE_ENV 👉 node enviroment (development or production)</li>
    <li>PORT</li>
    <li>DATABASE 👉 Hosted database</li>
    <li>DATABASE_PASSWORD 👉 Hosted database password</li>
</ol>

<h2>Authentication Keys</h2>
<ol>
    <li>JWT_SECRET 👉 Generate your secret jwt key</li>
    <li>JWT_EXPIRES_IN 👉 expiration time of jwt</li>
    <li>JWT_COOKIE_EXPIRES_IN 👉 expiration time of cookie</li>
</ol>

<h2>Email Keys</h2>
<ol>
    <li>EMAIL_HOST 👉 Mailtrap host</li>
    <li>EMAIL_PORT 👉 Mailtrap port</li>
    <li>EMAIL_USERNAME 👉 Mailtrap username</li>
    <li>EMAIL_PASSWORD 👉 Your mailtrap password</li>
</ol>

<h2>Admin details</h2>
<ol>
    <li>EMAIL_FROM 👉 receiver will see this email of admin in his email</li>
    <li>SENDGRID_USERNAME 👉 Sengrid username</li>
    <li>SENDGRID_PASSWORD 👉 Sengrid password</li>
    <li>SENGRID_API_KEY 👉 Your sengrid api key</li>
</ol>

<h2>Stripe Keys</h2>

<ol>
    <li>STRIPE_API_KEY 👉 Your stripe secret key </li>
</ol>

<h1 id="build-with"> Build With</h1>

<ul>
  <li><a href="https://nodejs.org/en/">NodeJS</a> 👉 JS runtime enviroment</li>
  <li><a href="https://expressjs.com/">ExpressJS</a> 👉 Web framework for Node.js</li>
  <li><a href="https://nextjs.org/">NextJS</a> 👉 The react framework for production</li>
  <li><a href="https://redux.js.org/">Redux</a> 👉 A Predictable State Container for JS Apps</li>
  <li><a href="https://sass-lang.com/">SASS</a> 👉 CSS extension language</li>
  <li><a href="https://mongoosejs.com/">Mongoose</a> 👉 MongoDB object modeling for node.js</li>
  <li><a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> 👉 Cloud database service</li>
  <li><a href="https://jwt.io/">JSON Web Token</a> 👉 open, industry standard RFC 7519 method for representing claims securely between two parties</li>
  <li><a href="https://stripe.com/">Stripe</a> 👉 Payments infrastructure for the internet</li>
  <li><a href="https://mailtrap.io/">Mailtrap</a> & <a href="https://sendgrid.com/">Sengrid</a> 👉 Email Delivery Service</li>
  <li><a href="https://www.heroku.com/">Heroku</a> 👉 Cloud platform</li>
</ul>

<h1 id="acknowledgement">Acknowledgement</h1>
<p>
  The API and design for this project are part of a udemy online course I did. building the frontend with nextjs is my own work 😎. Thanks to <a href="https://codingheroes.io/">Jonas Schmedtmann</a> for this great <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">course</a>.
</p>
