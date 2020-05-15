import { axios } from 'axios';// nodejs package

module.export = async function (event, context, logger){

const payload = event.payload;

var userIds = payload.userIds; // Send userids from platform event, Query these users from account associated with order

sendNotification(userIds);


};

function sendNotification(userIds){
  const url = 'google.com'
  
	return axios ({

	method:"POST",
	url,
	data:{
		"inputs" :
                 [
                   {
                     "customNotifTypeId" : "0MLB0000000PAwjOAG",// Create a custom notification in salesforce, use the id for sending notification
                     "recipientIds" : 'userIds',
                     "title" : "Bus Trip Cancelled!",
                     "body" : "Bus Trip has been cancelled.",
                   }
                 ]
    
	}
  })
  .then(response => {return true})
  .catch(err => {return false})
}