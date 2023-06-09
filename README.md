![066_6000x4072_all-free-download com (1)](https://github.com/jpswt/LostSkateShop/assets/94721942/fe665a2d-c5c0-4af8-a83c-60e7923adf05)

# Lost Skateboard Shop

This application was created with Vite React. 

This is a MERN stack e-commerce site for skateboard products and accessories.  A user can view browse through all of the product, as well as views details about individual products.  Items can be added, viewed and purchased from the shopping cart page.  Users must sign up and be logged in order to purchase products through the Stripe checkout.  

## Requirements

- NodeJS
- Package manager i.e. npm or yarn

## Clone the repository

`$ git clone http://https://github.com/jpswt/LostSkateShop.git`

#### For Backend Directory:

`$ cd backend`

#### For Frontend Directory:

`$ cd eShop`

## Install Dependencies

- Use `$ npm install` or `$ yarn install`

## Running the application

- For Backend Directory:

  1. Create .env file to add your MongoDB URL, PORT, JWT secret, Stripe Api Key and Stripe Client URL for succes/cancel routes : 

  ```
  MONGO_URL = _Your Mongodb Url_
  PORT= _Your Port_
  
  JWT_SECRET= _Your JWT Secret_
  STRIPE_API_KEY=_Your Stripe Api Key_
  CLIENT_URL= _Your Client URL_
  ```

  2. Create .env file to add server URI and Stripe APi Key:
  ```
  VITE_DB_URI= _Your Server Address_
  VITE_STRIPE_PUBLIC_KEY= _Your Stripe Public Key_
  ```
  3. Either `npm start` or `yarn start`

  MongoDB Server will run on: `http://localhost:####`
  
  - For Frontend Directory:

  1. Either `npm run dev` or `yarn dev`

  React Application will run on `http://localhost:51##`
  
## Lost Skate Shop Home Page 

Lost Skate Shop homepage which provides access for users to view trending gear and signup for to become a member. 

<img width="1506" alt="Screenshot 2023-05-11 at 10 29 29 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/90da8093-378e-4c1a-a30e-9578203bd9c0">
<img width="1495" alt="Screenshot 2023-05-11 at 8 48 59 AM" src="https://github.com/jpswt/NoteForNote/assets/94721942/6c5aea0c-8e26-49e5-b50c-b4ac19a0a17e">

## Product Gallery Page

This is the product page for all skateboard decks.  Users can filter decks by brands and sort by latest, ascending or descending price.  The product pages for trucks, wheels, bearings and hardware also operate the same. 

<img width="1499" alt="Screenshot 2023-05-11 at 8 49 34 AM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/947e1bfe-45b2-43b1-90bc-0e5b9eacf6bb">

## Single Product Page

This page displays an details of an individual product.  A user can read about the product, as well as add a product to the cart.

<img width="1487" alt="Screenshot 2023-05-11 at 7 06 51 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/24847305-5b0a-412e-ac5f-00909e6e71af">

## Shopping Cart

This is the shopping cart page which will list all products added by the user.  The user can update quantity, delete products and purchase the products.  Users must be logged in in order to complete a purchase.

<img width="1500" alt="Screenshot 2023-05-11 at 8 38 58 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/70f9207b-d64d-4dea-9658-30a6eb2c7f81">

## Stripe Checkout 

Once the user checksout the purchase, they are redirected to Stripe checkout page to complete the purchase.  The user will submit their payment information and complete the sale. 

<img width="1491" alt="Screenshot 2023-05-11 at 8 49 27 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/2acf3813-e59a-4886-809f-c7b27913d504">

## Order Confirmation 

Using Stripe Webhook, the order information in stored on shop server to be presented on custom confirmation page for the user.  The page will contains order details for the order.

<img width="1496" alt="Screenshot 2023-05-11 at 9 04 57 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/5e2bb375-065a-4ffe-b15e-d3a8434b31b9">

## User Orders

Users can see their order history and get an itemized list of products purchased.

<img width="1500" alt="Screenshot 2023-05-11 at 9 18 25 PM" src="https://github.com/jpswt/LostSkateShop/assets/94721942/0e2ae7ca-5ec8-4b7b-a1bc-afa158f85a53">

## Technologies Used
Frontend:
- ReactJS
- React Router DOM
- Redux Tool Kit
- Stripe Api
- NodeJS
- Sass


Backend:
- MongoDB
- Express.JS
- NodeJS
- Stripe API
- Stripe Webhook
