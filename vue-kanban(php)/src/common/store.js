import CPS from 'vuex-persistedstate'
import { createStore } from 'vuex'
const store = createStore({
    plugins : [ CPS() ],
    state(){
        return{
            apiURL : "http://eaststar0201.cafe24.com/app",
            // 로그인 회원 정보
            member : null,
        };
    },
    mutations : {
        setMember(state, member){
            state.member = member;
        }
    }
});

export default store;