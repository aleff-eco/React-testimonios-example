
import "./App.css";
import Testimonio from "./componentes/Testimonio";
import Inicio from "./componentes/Inicio"
function App() {
  return (
    <div className="App">
      <div className="first-container">
        <Inicio/>
      </div>
      <div className="second-container">
        <div className="third-container">
          <Testimonio
            especie="gato"
            imagen="pensando"
            nombre="Pensando"
            titulo="Soy un gato pensando en React"
            contenido="Hola, pueden creer que soy un gato, pero que esta pensando. Lo se, es muy loco, pero lo mas loco es que me encanta usar React" 
          />
          <Testimonio
            especie="gato"
            imagen="sonrisa"
            nombre="Sonrisa"
            titulo="Soy un gato sonriendo por React"
            contenido="Usar react me pone muy feliz, deberias aprender a usarlo" 
          />
          <Testimonio
            especie="gato"
            imagen="travieso"
            nombre="Travieso"
            titulo="La maldad esta en mis venas"
            contenido="Yo no uso React, yo puro HTML, JavaScript y CSS, React es para tontos." 
          />
          <Testimonio
            especie="perro"
            imagen="feliz"
            nombre="Feliz"
            titulo="Me gusta React"
            contenido="Llevaba tiempo sin usar React, lo he vuelto a probar y me ha gustado mucho, lo han pulido mucho desde la ultima vez que lo use, es emocionante poder seguir aprendiendo."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
