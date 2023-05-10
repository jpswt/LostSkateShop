# Lost Skateboard Shop

This application was created with Vite React. 

This is a MERN stack e-commerce site for skateboard gear.  A user can view browse through all of the products and get details about individual products.  If they want to purchase the item, it can be added to the cart and viewed in the cart.  Users must sign up and be logged in order to purchase itesm through the Stripe checkout.  

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
