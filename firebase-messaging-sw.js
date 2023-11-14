importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
   firebaseConfig = '${env}' == "production" ?  
  {
   apiKey: "AIzaSyCbKKwF1QFS-Iq_MgdZ21NITZyFHncnQQo",
   authDomain: "zadinga-bca7a.firebaseapp.com",
   databaseURL: "https://zadinga-bca7a.firebaseio.com",
   projectId: "zadinga-bca7a",
   storageBucket: "zadinga-bca7a.appspot.com",
   messagingSenderId: "944213929604",
   appId: "1:944213929604:web:8c6cc65a88b3f4f8635cd1",
   measurementId: "G-2EDKJMZZHZ"
 }
  :{
    apiKey: "AIzaSyBewnCZ-9S9fNmF0WiTVN2BoTuT3IwE2uk",
    authDomain: "zadinga-dev.firebaseapp.com",
    databaseURL: "https://zadinga-dev.firebaseio.com",
    projectId: "zadinga-dev",
    storageBucket: "zadinga-dev.appspot.com",
    messagingSenderId: "1016845239760",
    appId: "1:1016845239760:web:d778081e790b6c7b8fa5d5",
    measurementId: "G-L0ZHLESS6Z"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) =>{
    console.log('Received background message', payload);
     // Play audio when a push notification is received
  const channel = new BroadcastChannel('audio-control');
  channel.postMessage('play-audio');

  const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };
  self.registration.showNotification(notificationTitle,
      notificationOptions);
  // channel.close();
  });