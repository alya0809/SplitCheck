import {createStore} from 'vuex';
import {guestModule} from '@/store/guestModule.js';

export default createStore( {
    
    modules: {
        guest: guestModule
    }
})