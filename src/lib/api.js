  
import axios from "axios";

//외부 API 호출 함수 구현
//동기식 API 
export const getApi = async () => {
    try {        
        return await axios.get('/api/plants')
    } catch (error) {
        console.log(error)
    }
}