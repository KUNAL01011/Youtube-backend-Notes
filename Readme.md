Pakages:

1.Express:-Express.js is a minimal and flexible Node.js web application framework. 
====================================================================================
so main work of web application server is just give a end point and in this end point we perform some operations
Like Authentication, validation, data ko bhi data base me put karte hai so express help you to create this type of controllers,routes,middleware,connection with database,
aur ye kaam ham issily kar sakte hai using express if we don't want use it you will write manully every single logic by himself 


2.Mongoose:- it is a ODM(OBJECT DATA MODULING).
========================================================
using Mongoose simplifies the development process, provides a higher level of abstraction, and includes useful features that would otherwise need to be implemented manually when working directly with the MongoDB native driver. It streamlines the development of MongoDB-powered applications in a Node.js environment.

3.Dotenv:-Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
====================================================================================================================

It is also a pakage . It is use for private data as you know every web server has private data. jo ham chate hai ki koi access na kar paye so ham use dotenv ki maddad se aisa kar sakte hai.
step1. create a root file .env
step2. install your pakeage = npm i dotenv
step5. enter your data in your .env file like this
    PORT = 3000
step4. import dotenv file in your root directory like index.js
step4. configured your dotenv in same file like this
    dotenv.config({
    path: './env'
    })

step5. And all set use it like process.env.PORT where you want to use it

Error : when you set the path maybe work like that but if does not work then you need change the path like this 
    dotenv.config({
    path: './.env'
    })

4. Nodemon :- Nodemon it use to : server chalaye rakne ke liye
===============================================================

but when you change .env file it will be restart your server becouse nodemon not accept the .env changes


Follder Stucture:
==================

SRC:- all type of fucnality that should mongoose and express will preform
===========================================================================
PUBLICK:-We have public folder that have temp folder. we juct create for file uploading first we accept karte hai frontend se then server pe upload karte hai then server se utta kar ham isse cloudnary ya jo bhi use karo uss pe upload kar de hai for double check 
================================================================================================================
.ENV:-When we connecting to another continent then the only way to connect is http connection so we get url form the services then we save url and maybe password so url can autheticate you that is a cursial information so we cannot give to any so .env is a file that is private no one can access dirctly only the admin.
===============================================================================================================

.ENV.SAMPLE:-we just help out some how careted same thing so see what kind of url this server use
==================================================================================================
.PRETTIERRC:-just for fommating 
=====================================
.PRETTIERIGNORE:-don't do thing in formmating
=====================================================


FUNCTIONALITY
===============

1. Conection server to database
================================

App chehe toh same root file me kar sakte but it is better and readble to anyone who working on it so create a folder called db in your src then create a file connection.js in your db folder and connect like this.

const dbConnection = async () => {
    try {
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
        console.log(`Mongodb connection stablised`);
        console.log("What mongo return :- ",connectionInstence);
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1);
    }
}

- Hitesh sir bolte hai ki jab bhi app kisi bhi dusre continent se contect ya data magete hai toh time lagta hai    soo async laga diye to prevent this
- To dubble check aur to proper error handleing ke liye try catch block 
- mongoose ODM provide a methoud to connect database to use this i set mongoose.connect jo ki argument me string accept karta hai 
- catch me error handle kar liye agar koi aaya toh 
- process.exit(1):- It is a node funcnality means jab pura fucntion exicute ho jata hai tab node 0 status return karta hai but aur bhi hote hai (1) is for  Uncaught Fatal Exception
- Ab index.js file me function import karke check karo ki connect ho gaya ya nahi (.then .catch) if connected then start the server also like this:
if no the handle error also:

dbConnection()
.then(() => {
    app.on("error",(error) => {
        console.log("When we try to listen the error accored : ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is running on Port: ",process.env.PORT)
    })
}).catch((error) => {
    console.log("MongoDb connection failed ",error);
})

Ya par app.on sir ji ne use kar baya tha bina useke bhi chal raha connection fail hone par bhi nahi chal raha pata toh mere ko bhi bata dena

2 . Starting server by script
===========================
jab maualy karte hai toh we write like that node index.js
scripting : - 
"script_name":"nodemon src/index.js";
you can run script by npm run 
so i write like this it will fine but 
sir write like this : -nodemon -r dotenv/config --experimental-json-modules src/index.js
sir wali jo hai bo na for experimental ke liye hai jo config hamne set ki thi dotenv ki 


