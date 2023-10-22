



export default function Header (){

    return(
        <div  style={{display:'flex', flexDirection:'row', backgroundColor:'#242424', width:'100%', margin:0, borderRadius:8}}>
            <div style={{width:'20%'}}>
                <h2 style={{textAlign:'center', color:'#fff'}}>Coisinhas3d</h2>
            </div>
            <div  style={{display:'flex', flexDirection:'row',width:'80%',
                // backgroundColor:'#123f12',
                 alignItems:'center',
                 justifyContent:'space-around'}}>
                <div>
                    <a  href="#" style={{color:'#fff',textDecoration:'none'}}>Arquivos 3D</a>
                </div>
                <div>
                    <a  href="#" style={{color:'#fff',textDecoration:'none'}}>Bonecos em 3D</a>
                </div>
                <div>
                    <a  href="#" style={{color:'#fff', textDecoration:'none'}}>Coisinhas em 3D</a>
                </div>
            </div>
        </div>
    )
}