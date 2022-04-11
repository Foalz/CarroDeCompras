import { Component } from "react";
import Producto from "./Producto";

const styles = {
    detallesCarro:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, .3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },

    ul:{
        margin: 0,
        padding: 0
    },

    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA',
    }
}

class DetallesCarro extends Component{

    render(){
        const { cart } = this.props 
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {cart.map(x => <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='30' />
                        {x.name} <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro