import {createStore} from 'vuex';
import {mainModule} from '@/store/mainModule.js';

export default createStore( {
    
    modules: {
        main: mainModule
    }
})