import estiloTopo from "./topo.module.css";




export default function Topo(){

    return(

        <section className={estiloTopo.Banner}>

                <div className={estiloTopo.boxTx}>

                    <h1>CARDÁPIO</h1>

                    <p>Nosso cardápio é um requinte de sabores refinados</p>

                </div>

        </section>

    )
}