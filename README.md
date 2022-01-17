# shopify-challenge
This inventory tracking application is a submission for the Shopify Backend Developer Challenge and the Shopify Infrastructure engineer challenge. This application is built with Node js, MongoDB and Express.

# Testing Instructions (Environment Set up)
- Git clone this repository
- You will need to install Node, you can do so from Node's official website: https://nodejs.org/en/download/
- To ensure that Node is downloaded correctly, run `node -v`. A node version above v12 is preferred
- Run `npm -v` to ensure Node project manager is installed. 
- Lastly, you'll need to have dotfiles installed. On your terminal, run `npm i dotenv`
- After you git clone, cd into the `shopify-challenge` directory
- Run `node index.js`, You should see a message saying `Welcome to Shopify!`


# Test Adding products
- We make use of MongoDB to store Product information. For this implementation, we store the product name and quantity available
- Go to `localhost:3000`, You should see a search bar and a button saying `Add Product`
- Clicking on `Add Product` will navigate you to a form where you'll be allowed to add a product and it's quantity
- Click `Submit`, you'll be redirected in the home page where you'll be able to view the product you entered
- Create multiple products to ensure correctness

# Test Editing Products
- Once you add products, the home page will have two additional buttons for each product, `Edit` and `Delete`
- Clicking on `Edit` will navigate you to a form where you'll be allowed to edit the product chosen
- Click `Submit`, you'll be redirected in the home page where you'll be able to view the product you entered.
- Clicking `Return Home` will redirect you to the home page and the product won't be edited

# Test Deleting Products
- Once you add products, the home page will have two additional buttons for each product, `Edit` and `Delete`
- Clicking on `Delete` will remove the product from the home page.

# Test Search Filter
- Add a couple of products to get started
- In the search bar, enter a product name and hit search
- You'll be redirected to a page where you'll view the results of your search
- Clicking on `Return Home` will navigate you back to the home page
- Try searching for a product which doesn't exist, the results page will be empty with a button saying `Return Home`


