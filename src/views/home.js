import {useState }from 'react';
import firstslide from '../img/firstslide.jpg';
import secondslide from '../img/secondslide.jpg';
import thirstslide from '../img/firstslide.jpg';


const Home = () => {
    const [suscriptionData, setSuscriptionData] = useState({
        email: "",
        name: "",
        rut: "",
        phone: "",
       });
    
       const handleChange = (evento) => {
        setSuscriptionData({...suscriptionData, [evento.target.name] : evento.target.value })
      } 
      
    
      const onSubmit = (evento) => {
        evento.preventDefault()
        console.log("Enviado el formulario")
      }
    return(
        <>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="container">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                    <img className="d-block w-100" src={firstslide} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={secondslide} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={thirstslide} alt="Third slide"/>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>

                <div className="container mt-5">
                    <h4>Suscríbete</h4>
                   
                    <form className="mb-5" onSubmit={onSubmit}> 
                        <div className="container">    
                            <div className="row d-flex align-items-center flex-column"> 
                                <div className="form-group w-50 ">
                                    <label form="exampleInputEmail1"></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={handleChange} value={suscriptionData.email} name="email"/>
                                </div>
                                <div className="form-group  w-50">
                                    <label form="exampleInputPassword1"></label>
                                    <input type="name" className="form-control" id="name" placeholder="Nombre" onChange={handleChange} value={suscriptionData.name} name="name"/>
                                </div>
                                <div className="form-group w-50 ">
                                    <label form="exampleInputPassword1"></label>
                                    <input type="rut" className="form-control" id="rut" placeholder="RUT" onChange={handleChange} value={suscriptionData.rut} name="rut"/>
                                </div>
                                <div className="form-group  w-50">
                                    <label form="exampleInputPassword1"></label>
                                    <input type="telefono" className="form-control" id="telefono" placeholder="Teléfono" onChange={handleChange} value={suscriptionData.phone} name="phone"/>
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>                                              
                        </div>    
                    </form>
                </div>
        </>
    )
}

export default Home;