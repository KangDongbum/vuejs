import { createStore } from 'vuex' ;

const store = createStore({
    state() { // 공통 데이터를 지정하는 부분
        return {
            count : 0,
        };
    },
    mutations : { // state에 정의된 변수의 변경처리하는 메소드
        increment (state) {
            state.count++;
        }
    }
});

export default store;