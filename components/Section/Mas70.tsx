import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Image from 'next/image'

import { Link } from '@ui/link/link'

import logo from '@/public/static/images/mientras/03.jpg';

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
        fontSize:40,   
    },
    font1: {
        color: "#489B1E",
        lineHeight: 1.3,
        fontSize:40,  
    },
    fontText: {
        color: "black",
        lineHeight: 1.4,
        fontSize:15,
    }
}

export function SetentaAnios() {

  return (
    <div style={styles.container}>
        <div style={{display: 'inline-block'}}>
            <div style={{ display: 'row'}}>
                <h1 style={styles.font} >Más de 70 años<br/>
                de la Mano del Productor <br/></h1>
            </div>

            <div style={{ display: 'row'}}>
                <h1 style={styles.font1}>Venezolano</h1>
            </div>

            <div style={{ display: 'row',  marginTop:'15px', }}>
               <p style={styles.fontText}> Somos una compañía sólida con mas de 70 años de <br/>
                   trayectoria, reconocidos por nuestro compromiso,<br/>
                   responsabilidad y servicio brindado colaborando <br/>
                   con el sector agroalimentario del país.
               </p>
            </div>

            <div style={{ display: 'row',  marginTop:'25px'}}>
               <button style={styles.btn}>
                  Ver mas
               </button>
            </div>
        </div>

        <div style={{display: 'inline-block', marginLeft: '40px'}}>
          <div className=" items-center">   
            <Image
              src={logo}
              alt="mi logo"
              width="490px"
             />
           </div>
        </div>
    </div>
    
  )
}
