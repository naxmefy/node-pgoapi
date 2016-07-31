# Usage

```JavaScript
import PGOAPI from 'pgoapi';

import userSession, {token} from './my-dummy-user-session';

// new instance with credentials
let leeroy = new PGOAPI({
    username: 'leeroy',
    password: 'password',
    authType: PGOAPI.PTC // or PGOAPI.GOOGLE - PGOAPI.PTC is default
});

// new instance with token
leeroy = new PGOAPI(token);

// connect (Promise) // only needed if no token available
leeroy.connect()
    .then(function() {})
    .catch(function(error) {});
    
// connect (Callback) // only needed if no token available
leeroy.connect(function(error) {});

// events
leeroy.on('connect', () => console.log('leeroy is connected') );
leeroy.on('disconnect', () => console.log('leeroy is disconnected') );
leeroy.on('error', error => console.error('leeroy got an error', error) );

// update john's position
leeroy.setPosition(lat, lng);

// get jane's player information
console.log(leeroy.getPlayer());
```