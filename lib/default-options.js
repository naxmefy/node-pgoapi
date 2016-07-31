'use strict';

module.exports = {
    constants: {
        api: {
            url: 'https://pgorelease.nianticlabs.com/plfe/rpc',
            headers: {
                'User-Agent': 'Niantic App'
            }
        },
        
        login: {
            url: 'https://sso.pokemon.com/sso/login?service=https%3A%2F%2Fsso.pokemon.com%2Fsso%2Foauth2.0%2FcallbackAuthorize',
            oauth: 'https://sso.pokemon.com/sso/oauth2.0/accessToken',
            headers: {
                'User-Agent': 'niantic'
            }
        },
        app: {
            id: '9774d56d682e549c',
            oauth: 'audience:server:client_id:848232511240-7so421jotr2609rmqakceuu1luuq0ptb.apps.googleusercontent.com',
            domain: 'com.nianticlabs.pokemongo',
            sig: '321187995bc7cdc2b5fc91b11a96e2baa8602c62'
        },
        client: {
            id: 'mobile-app_pokemon-go',
            redirect: 'https://www.nianticlabs.com/pokemongo/error',
            secret: 'w8ScCUXJQc6kXKw8FiOhd8Fixzht18Dq3PEVkUCP5ZPxtgyWsbTvWHFLm2wNY0JR'
        }
    }
};