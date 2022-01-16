const { config } = require('dotenv'); 
var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var Product = require("./schema/product"); 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
config(); //invoking the dotenv config here
const uri = process.env.DB_URI;
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true });


// Render Home page
app.get('/', (req, res)=>{
    res.redirect("/products")
});

app.get("/products",function(req,res){
    // We define a Product schema which contains an objectName and quantity
    // We return the list of products here, which is then displayed in our home page
    Product.find({},(err, Products)=>{
        res.render("home",{products:Products})
    })
}
)

// This get request is used to render the form allowing users to create a product
app.get("/products/create/new",(req,res)=>{
    res.render("new")
})

// This get request is used to render a form allowing users to edit a product
// We pass in an :id since we need to return a single product information
app.get("/products/:id/edit",(req,res)=>{
    Product.findById(req.params.id,function(err,foundProduct){
        if(err){
            // In case of an error, we return back to the home page
            res.redirect("/products")
        }
        else{
            // Navigate user to the edit product information form
            res.render("edit",{product:foundProduct})
        }
    })
    
})

app.get("/results",(req,res)=>{
    if(req.query.search){
        // Implementing the search functionality by making use of regex
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // Find the user input in the database
        Product.find({productName: regex}, function(err, foundProducts){
            if(err){
                console.log(err)
            }
            else{
                // If a match occurs, return the found product
                res.render("results", {products:foundProducts})
            }
        })
    }
    else{
        res.redirect("/products")
    }
})

app.post('/products/create', (req, res)=> {
    // A post request to create a product. We pass in a productName and quantity
    Product.create({productName: req.body.productName, quantity: req.body.quantity},function(err,newProduct){
        if (err) {
            console.log(err);
        }
        else{
            // Save the new product and redirect back to the home page
            console.log(newProduct);
            newProduct.save()
            res.redirect("/products")
        }
    })
});

app.put("/products/:id",(req,res)=>{
    // A Put request is used to update information. In this case, we make use of a 
    // put request to edit product details. The params of the request will be the updated product name and quantity.
    Product.findByIdAndUpdate(req.params.id,{productName:req.body.productName,quantity:req.body.quantity},(err,foundProduct)=>{
        if(err){
            res.redirect("/products")
        }
        else{
            // Upon successful edits, redirect to home page
            res.redirect("/products")
        }
    })
})

app.delete("/products/:id",(req,res)=>{
    // A delete request is used to delete a product from the database
    // Our only params is the product ID
    Product.findByIdAndDelete(req.params.id,(err)=>{
        res.redirect("/products")
    })
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

app.listen(3000, (req, res) => {
    // Initialize server
    console.log("Welcome to Shopify!");
});


