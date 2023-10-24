
import { Grid, Input } from 'antd';
import {useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import {  StyledCarouselContainer } from './style';


export default function Home (){
    const { Search } = Input;
    const [searchQuery, setSearchQuery] = useState("");
   // const [imgCarrosel, setImgCarrossel] = useState("");

    const handleSearch = (value:string) => {
      setSearchQuery(value);
      console.log(searchQuery)
      setSearchQuery("")
   
    };

    const imagens = [
      
      "/img/Card_Manaus.png",
      "/img/Card_Japao.png",
      "/img/Card_Paraiba.png",
      "/img/Card_Peru_e_Bolivia.png",
      "img/Card_San_Andreas.png"
    ]

    return(
      <div style={{width:'100%', display:'flex', flexDirection:'column', marginTop:25, justifyItems:'center'}}>
        <div style={{display:'flex', width:'50%',justifyContent:'flex-start', marginLeft:150}}>
          <h2>Ache suas Coisinhas3d</h2> 
         
        </div>   
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Search
          placeholder="Digite aqui para buscar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
          enterButton
          style={{width:'60%', }}
          /> 
        </div>
        <div  style={{ width: '100%', height: '300px', display:'flex', marginTop:40.,
            justifyContent:'center'
          }}>
          <StyledCarouselContainer>
            <Carousel  showArrows={true} infiniteLoop={true}
               showStatus={true}
               autoPlay={true} interval={3000}
               showThumbs={true}
               stopOnHover={true}
               swipeable={true}
              
            >
              {imagens.map((item, index)=>(
                <div key={index} style={{ width:'100%'}} >
                  <img src={item} alt={`Imagem ${index + 1}`} style={{width:'50%'}}/>
                </div>
              ))}
            
            </Carousel>
          </StyledCarouselContainer>
        </div>
        <div style={{display:'flex',flexDirection:'row', justifyContent:'center', marginTop:150, alignItems:'center'}}>
          <div style={{width:'50%',}}>
            <h2>Quem nós somos..</h2>
            <p>Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
              Blablablablabalablablbalbalablablabalalablabla
              balablablabalbalbalbalbalablabllablablablaalbalalbalbalbalbalb
             
              
              </p>  
          </div>
          <div >
            <img src='/img/Impressora.png' alt='impressora'/>
          </div>
        </div>
        <div style={{ display:'grid', }}
             >
          <div style={{width:'100%', }}>
              <img src= "/img/Card_Manaus.png" alt='card01'  style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%', gridColumn:'2/3'}}>
              <img src ="/img/Card_Japao.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%', gridColumn:'3/4'}}>
              <img src ="/img/Card_Peru_e_Bolivia.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%', }}>
              <img src ="/img/Card_Paraiba.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%', gridRow:'3/4'}}>
              <img src ="img/Card_San_Andreas.png"  alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%',}}>
              <img src ="/img/Card_Manaus.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%',}}>
              <img src ="/img/Card_Peru_e_Bolivia.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%'}}>
              <img src ="/img/Card_Paraiba.png" alt='card01' style={{width:'100%'}}/>
          </div>
          <div  style={{width:'100%',}}>
              <img src ="img/Card_San_Andreas.png"  alt='card01' style={{width:'100%'}}/>
          </div>
         
        </div>


      </div>
    )
}