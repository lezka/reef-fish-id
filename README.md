# Fish Identity Social Database

Kick-start introduction to set the project up and running

---

## 1 - Software Requirements (for Mac)


- **Installing HomeBrew**

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
```


- **Installing NVM**

NVM (Node Version Manager): Simple bash script to manage multiple active Node.js versions https://github.com/creationix/nvm#install-script

For our convenience, we will be using NVM, it's a very simple command line tool that lets us download, update, and switch to any Node version available with just a few commands

Installing NVM

```
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

And NVM should now be installed in your system!

Now you will have to re-open your TERMINAL to actually use NVM, so go ahead and close TERMINAL and open it again


We can verify if NVM has been successfully installed by typing this command:

```
nvm --version
```

- **Installing Node**


Now we are ready to actually install Node.


Step 1:

Type and enter nvm ls-remote

```
nvm ls-remote
```

You should see a list of all available versions of NodeJS.

If you have any version of node already installed, it will be indicated with a green arrow.

Step 2:

Now if you wanted to install v7.9.0, it would be as easy as typing: nvm install 7.9.0

```
nvm install 7.9.0
```

And that's it! You already have the latest version of Node.js installed very easily!

```
node -v
```

- **Installing MongoDB**

Is always good to make sure HomeBrew is up-to-date:

```
brew update
```

You can install MongoDB via brew

```
brew install mongodb
```

Install the MongoDB Binaries with TLS/SSL Support

```
brew install mongodb --with-openssl
```


## 2 - Server setup

- **Installing Packages**

You can install all required packages described in packages.json with the single command:

```
npm install
```

or individually


- **Nodmon Package**


Nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server.

```
npm install --save-dev nodemon
```

- **Express Package**

Express will be used to create the server while n

```
npm install express --save
```

- **Mongoose Package**

Mongoose will help us talk to our database

```
npm install mongoose --save
```

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.


```
npm install body-parser
```



## 3 - Let's Run it

### Run MongoDB

- **1 - Create the data directory**

Before you start MongoDB for the first time, create the directory to which the mongod process will write data. By default, the mongod process uses the /data/db directory. If you create a directory other than this one, you must specify that directory in the dbpath option when starting the mongod process later in this procedure.

The following example command creates the default /data/db directory:

```
mkdir -p /data/db
```

- **2 - Set permissions for the data directory**


Before running mongod for the first time, ensure that the user account running mongod has read and write permissions for the directory.


- **3 - Run MongoDB**


To run MongoDB, run the mongod process at the system prompt. If necessary, specify the path of the mongod or the data directory. See the following examples.

Run without specifying paths

If your system PATH variable includes the location of the mongod binary and if you use the default data directory (i.e., /data/db), simply enter mongod at the system prompt:

```
mongod
```


If your PATH does not include the location of the mongod binary, enter the full path to the mongod binary at the system prompt:

```
<path to binary>/mongod
```


If you do not use the default data directory (i.e., /data/db), specify the path to the data directory using the --dbpath option:

```
mongod --dbpath <path to data directory>
```


### Finally run the server

On your terminal, run npm run start 

```
npm run start
```

this will start the server and then you will see:

```
Fish Id Database RESTful API server started on: 3000
```


