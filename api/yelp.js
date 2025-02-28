import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization: 'Bearer HGi1pS1_nFPKhOUKg44VvlJDIzxTAGz0wsuIjsb4lxx0Xt1yGE6AlkjU7EHLq-UTLXtKy-1XaW5B2UWNMgIqDWqXVPlAwag8MI-V6ReFaiQrVE2cwjArfoteLo6_Z3Yx'
    }
     
})