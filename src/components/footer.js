import React from "react";
import '../styles/footer.css';

const FooterPage = () => {
  return (
    <>
    <nav>
    <hr className="footer"/>
        <div class="container">
        <div className="row row-cols-3">
                <div className="col" >
                    <ul className="">       
                        <div defaultActiveKey="/" className="flex-column">
                            <h6 className="title">Look Market - Contacto</h6>
                            <li eventKey="link-1">Call Center: 2 2553 8376</li>
                            <li eventKey="link-2">Televentas 2 2553 8376</li>
                            <li eventKey="link-2">Email info@lookmarket.cl</li>
                            
                            <li eventKey="link-1">Venta Empresas </li>
                            <li eventKey="link-2">Email: ventaempresas@lookmarket.cl</li>
                        </div>
                    </ul>
                </div>
                <div className="col" >
                    <ul className="">
                        <div defaultActiveKey="/home" className="flex-column">
                            <h6 className="title">Sobre Look Market</h6>
                            <li eventKey="link-1">Institucional</li>
                            <li eventKey="link-2">Preguntas frecuentes</li>
                            <li eventKey="link-2">Cómo comprar en Look Market</li>
                            <li eventKey="link-2">Cambios o devoluciones</li>
                            <li eventKey="link-2">Plazos y costos de entrega</li>
                            <li eventKey="link-2">Política de privacidad</li>
                            <li eventKey="link-2">Términos y condiciones</li>
                        </div>
                    </ul>
                </div>
                <div className="col">
                    <ul className="">
                        <div defaultActiveKey="/home" className="flex-column">
                            <h6 className="title">Marcas</h6>
                            <li eventKey="link-1">Sexy Hair</li>
                            <li eventKey="link-2">Joico</li>
                            <li eventKey="link-2">Revlon Professional</li>
                            <li eventKey="link-2">Agadir</li>
                            <li eventKey="link-2">Keratine Complex</li>
                            <li eventKey="link-2">WetBrush</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  );
}

export default FooterPage;