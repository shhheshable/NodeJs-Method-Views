// Create an object 'ph' that will store handler functions for routes
const ph = {
    // Define a method 'nom' that handles a request (req) and a response (res)
    nom: (req, res) => {
        res.render('index')
        
    },

    about: (req, res) => {
        res.render('about')
        
    },

    contact: (req, res) => {
        res.render('contact')
        
    },

    shop: (req, res) => {
        res.render('shop')
        
    },

    skating: (req, res) => {
        res.render('skating')
        
    },
};

// Export the 'ph' object so it can be used in other files (like in router.js or app.js)
module.exports = ph;
