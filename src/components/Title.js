import { Component } from "react";

const styles = {
    title: {
        marginBottom: '30px'
    },
}

class Tienda extends Component{
    render(){
        return(
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Tienda