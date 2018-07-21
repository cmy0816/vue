export default function Fetch ({url,mode='cors',credentials='omit',methods='GET',body={}},success){
    if(!url){
        return null;
    }
    fetch(url,{
        mode,
        credentials,
        methods,
        body
    }).then(res=>{
        res.json().then(data=>{
            success(data);
        })
    })
};
