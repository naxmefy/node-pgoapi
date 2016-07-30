# Usage

```JavaScript
import PGOAPI from 'pgoapi';

import userSessions from './my-dummy-user-sessions';

// only new instance
const leeroy = new PGOAPI;

// connect (Promise)
leeroy.connect('leeroy', 'password', PGOAPI.PTC)
    .then(function() {})
    .catch(function(error) {});
    
// connect (Callback)
leeroy.connect('leeroy', 'password', PGOAPI.PTC, function(error) {});

// new instance and connect (with credentials or token)
const john = new PGOAPI('johndoe', 'password', PGOAPI.PTC); // or PGOAPI.GOOGLE
const jane = new PGOAPI(userSessions.jane.PGOAPIToken);

// events
leeroy.on('connect', function(){});
leeroy.on('disconnect', function(){});
leeroy.on('error', function(error){});

// update john's position
john.setPosition(lat, lng);

// get jane's player information
console.log(jane.getPlayer());
```