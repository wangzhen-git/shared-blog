import axios from "axios"
import {Message} from "element-ui";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials =true


export default function request(url,type="GET",data={}) {
    return new Promise((resolve,reject)=>{
        let option = {
            url,
            // 我觉得这个地方不需要method，所以我简化了
            // method:type
            type
        }
        if(type.toLocaleLowerCase() === 'get'){
            option.params = data
        }else{
            option.data = data
        }
        axios(option).then(res => {
            if(res.data.status === 'ok'){
                resolve(res.data)
            }else{
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err =>{
            Message.error('网络异常')
            reject({msg:'网络异常'})
        })
    })

}

