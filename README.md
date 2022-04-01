# Example of how to use AWS Event bridge with SST

## Basic setup
Run `npm install` then  `npm run start` in the `publish` and `subscriber` folder. 
Good idea to have two termnal tabs for this.

 When deployed take the output ApiEndpoint URL from the `publish` stack and add `/patient_updated` to it get a url that looks like `https://abc123.execute-api.us-east-1.amazonaws.com/patient_updated`. 
 
 Run this in a browser. You should see the request come in to your local machine `publish` terminal window.
 A moment later you should see the request sent from the Event Bridge in your local machine `subscriber` terminal window.


![image](https://user-images.githubusercontent.com/1830391/161274011-f34f3d71-0e5c-42d1-8330-44b050a4d279.png)
