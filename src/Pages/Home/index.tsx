import { Input } from 'antd'
import {useState} from 'react'

const { Search } = Input;




export default function Home (){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (value:string) => {
      setSearchQuery(value);
      console.log(searchQuery)
      setSearchQuery("")
   
    };
    return(
        <div style={{width:'100%', display:'flex', flexDirection:'column', marginTop:25, justifyItems:'center'}}>
         <div style={{display:'flex', width:'50%',justifyContent:'flex-start', marginLeft:150}}>
            <h2>Ache suas Coisinhas3d</h2> 
         </div>   
        <div style={{display:'flex', justifyContent:'center'}}>
            <Search
                placeholder="Digite aqui para buscar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
                enterButton
                style={{width:'80%', }}
                /> 
        </div>

        </div>
    )
}