import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Image from 'next/image'

import { Link } from '@ui/link/link'

import logo from '@/public/static/images/mientras/03.jpg';

//imagenes estaticas
import Agro from '@/public/static/images/lineaProductos/agroquimico01.jpg';
import Maq from '@/public/static/images/lineaProductos/maquinaria01.jpg';
import Sal from '@/public/static/images/lineaProductos/SaludAnimal01.jpg';
import ferr from '@/public/static/images/lineaProductos/ferreteria01.jpg';

const styles = {
    container: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft:'150',
        marginRight:'150',
        marginTop:'80px',
        marginButton:'150px',
    },
    container2: {
        display: 'inline-block', 
        //alignItems: 'center', 
        //justifyContent: 'center',
        marginLeft:'50px',
        marginTop:'70px',
        marginButton:'50px',
    },
    btn: {
        backgroundColor:"white",
        color: "#489B1E",
        fontsize:"1.5rem",
        padding: "10px",
        paddingLeft:"50px",
        paddingRight:"50px",
        border:"3px solid #489B1E",
        borderColor:"#489B1E",
        borderRadius:"3px",
        cursor:"pointer"
    },
    
    font: {
        color: "black",
        lineHeight: 1.3,
        fontSize:19,
        marginTop:'10px',   
    },
    font1: {
        color: "black",
        lineHeight: 1.3,
        fontSize:30,  
    },
    fontText: {
        color: "black",
        lineHeight: 1.4,
        fontSize:15,
    },
}

export function Catalogo() {

  return (
    
    <div style={styles.container}>


        <div style={{display: 'block'}}>

            
            <div style={{display: 'in-line', marginBottom: '10px'}}>
                <h1 className=" items-center" style={styles.font1}> Catálogo de Productos </h1>
            </div>

            <div style={{ display: 'inline-block', padding: '10px'}}>
                
                    <div className=" items-center">   
                        <Image
                        src={Agro}
                        alt="mi logo"
                        height="200px"
                        width="250px"
                    />
                        <div style={{}}>
                            < h1 style={styles.font} >Agroquímicos </h1>
                        </div>
                    </div>
            </div>

            
            <div style={{ display: 'inline-block', padding: '10px'}}>
                
                    <div className=" items-center">   
                        <Image
                        src={Maq}
                        alt="mi logo"
                        height="250px"
                        width="250px"
                    />
                        <div style={{}}>
                            < h1 style={styles.font} >Maquinarias</h1>
                        </div>
                    </div>
            </div>

            <div style={{ display: 'inline-block', padding: '10px'}}>
                
                    <div className=" items-center">   
                        <Image
                        src={Sal}
                        alt="mi logo"
                        height="250px"
                        width="250px"
                    />
                        <div style={{}}>
                            < h1 style={styles.font} >Salud Animal</h1>
                        </div>
                    </div>
            </div>

            <div style={{ display: 'inline-block', padding: '10px'}}>
                
                    <div className=" items-center">   
                        <Image
                        src={ferr}
                        alt="mi logo"
                        height="250px"
                        width="250px"
                    />
                        <div style={{}}>
                            < h1 style={styles.font} >Ferretería</h1>
                        </div>
                    </div>
            </div>



        </div>
    </div>
    
  )
}
