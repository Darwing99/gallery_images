
import  {useCallback, useEffect, useState} from 'react';
export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);


    const peticion = useCallback( async () => {
            const apikey = "client_id=XmHxwg2QeS2DTtuNSg2ONidqwDjiKOQhpWNi4SrD6-4";
            let route=`https://api.unsplash.com/photos/?${apikey}`;
    
            if(input!==""){
                route=`https://api.unsplash.com/search/photos/?per_page=50&query=${encodeURI(input)}&${apikey}`;
            }
            setTimeout(async()=>{
                setLoading(true);
                const resp = await fetch(route);
        
                const data = await resp.json();
                setImages(data.results ? data.results : data);
                console.log(data.results ? data.results : data)
                setLoading(false);
            },1000)
           
            
            
        },[input]
    )

  
    useEffect(() => {
        peticion();
    }, [input])
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const texto=e.target[0].value;
        setInput(texto);
    };
    return [images,loading,handleSubmit];
}

