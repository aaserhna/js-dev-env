# js-dev-env

> JavaScript Development Environment

## Sharing your Work-in-Progress

### LOCALTUNNEL

**localtunnel** punches a hole through your firewall so you can easily share work on your local machine, effectively turning your PC to a server, and creating a tunnel to your local machine which anyone with the url can access as long as the tunnel is open. Take the following steps:

- Install the localtunnel package globally using ```npm install localtunnel -g```
- Start your app e.g. ```node buildScripts/srcServer.js```
- Then type this on the terminal ```li --port 3000```
- Copy the random url returned (e.g. [http://nnxbcogcik.localtunnel.me]) and share with others to view.
NOTE that the command ```lt --port 3000 --subdomain afe``` replaces _nnxbcogcik_ with _afe_

### NGROK
**ngrok** punches a hole through your firewall and creates a secure tunnel to your local machine. The only difference between this option and localtunnel is the add security i.e. you can password-protect access. Take the following steps:
Sign up

- Install ngrok
- Install authtoken
- Start your app
- Enter this on the terminal ```./ngrok http 80```

### NOW
**now** provides a way to quickly deploy Node.js to the cloud i.e. for any directory that contains a ```package.json```using one command ```now```.

- Install the package globally ```npm install -g now```
- Create a start script that opens your preferred web server such as Express.
- Then anytime you want to deploy the app, you just type ```now```

### SURGE
**surge** is a service to quickly host static files to public URL i.e. the assumption is that al your HTML, JavaScript and CSS files are static and so your files are published to the "surge" servers. The steps to follow are...

- Install using ```npm install -g surge```
- surge
