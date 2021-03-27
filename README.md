# All in one ecommerce solution

## Instructions on what to do.
You need to clone your specific branch each time for your task. Push into that branch and I shall merge if it is proper. For each new task I shall have a specific branch and you will only clone and push in that branch. **NEVER use the master branch.**

## Starting Guide.
Create a File named ``.env`` in the project directory and write our database password. For example if my password is 123456:
```bash
DATABASE_PASSWORD = '123456'
```

Run the following commands to start.
```bash
npm install
```
Make sure to first start the database server and the server for testing can be run by using the following command.
```bash
npm run dev
```
The server is set to listen to port 3000. Go to **localhost:3000** to see the website.

## Job Guide.
If you are working on front end. Your route has already been set just create the ejs file and work on it.

## Linking Guide.
Use the following HTML tag for linking css files to your HTML/ejs. Replace index.css with your css file.
```html
<link rel="stylesheet" type="text/css" href="/css/index.css">
```
Use the following HTML tag for linking Javascript files to your HTML/ejs. Replace index.js with your javascript file.
```html
<script type="text/javascript" src="/js/index.js"></script>
```

## Site links.
1. [Front Page](http://localhost:3000/ "index.ejs")
2. [Shop Page](http://localhost:3000/shop  "shop.ejs")
3. [Product page](http://localhost:3000/shop/product "product.ejs")

## Boiler HTML/ejs
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Boiler</title>
</head>
<body>
   
</body>
</html>
```

## Bugs
1. Main page side bars do not work when there is not enough shops.
2. Shop divs need to be better sized and responsive in main page.
3. Need to add a check so that there are not 2 shops with the same name.
4. Need to make sure only images are uploaded when uploading a product image.
