let imagenes = [



    {
        "url": "./Imagenes/arcoCarrusel.png",
        "nombre": "Dibujo con referencia",
        "descripcion":"Este dibujo captura un arco inspirado en la fotografía de la derecha. Elegí esta imagen para practicar efectos de luz y sombra. Las sombras acentúan la estructura, mientras que las luces resaltan la profundidad de la imagen.",
    },
    {
        "url": "./Imagenes/Ink1.png",
        "nombre": "Imágenes Inktober 2024",
        "descripcion":"Algunas de las ilustraciones realizadas para el Inktober 2024. Más en mi Instagram",
    },
    {
        "url": "./Imagenes/Ink2.png",
        "nombre": "",
        "descripcion":"",
    },
    {
        "url": "./Imagenes/Ink3.png",
        "nombre": "",
        "descripcion":"",
    },
    {
        "url": "./Imagenes/Concept1.png",
        "nombre": "Diseño de personaje",
        "descripcion":"Trabajo en el que se pedía crear un personaje desde cero, con un arquetipo muy definido. En el proceso hice pruebas de vestuario, de silueta y de color. La estética de la maleta intenta reafirmar este arquetipo y a continuación se adjunta el blueprint de la misma. También hice algunas expresiones del personaje.",
    },
    {
        "url": "./Imagenes/blueprint.png",
        "nombre": "",
        "descripcion":"",
    },
    {
        "url": "./Imagenes/PersonajeYComplemetos.png",
        "nombre": "Diseño de personaje II",
        "descripcion":"Este proyecto presenta el diseño de un personaje 2D a color para un videojuego, junto con un patinete y un broche que también forman parte de la narrativa. Se puede observar cómo todos los elementos comparten un estilo común, evidenciando una cohesión visual en el diseño del videojuego.",
    },
    {
        "url": "./Imagenes/Enemigos.png",
        "nombre": "Diseño de Enemigos",
        "descripcion":"Estos son los diseños de los enemigos del videojuego. Al igual que el personaje principal, el patinete y el broche, estos enemigos comparten el mismo estilo visual, asegurando una coherencia estética en todo el juego.",
    },
    
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

function actualizarCarrusel() {
    // Actualizar la imagen
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen del carrusel" loading="lazy"></img>`;
    
    // Actualizar el texto
    let nombre = imagenes[actual].nombre ? `<h3>${imagenes[actual].nombre}</h3>` : "";
    let descripcion = imagenes[actual].descripcion ? `<p>${imagenes[actual].descripcion}</p>` : "";
    texto.innerHTML = `${nombre}${descripcion}`;
    
    // Actualizar los puntos de navegación
    posicionCarrusel();
}

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i === actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}

// Eventos para los botones
atras.addEventListener('click', function() {
    actual = (actual === 0) ? imagenes.length - 1 : actual - 1;
    actualizarCarrusel();
});

adelante.addEventListener('click', function() {
    actual = (actual === imagenes.length - 1) ? 0 : actual + 1;
    actualizarCarrusel();
});

// Inicializar el carrusel
actualizarCarrusel();


let Renders = [

    {
        "url": "./Imagenes/bnk1.png",
        "nombre3d": "Bunker",
        "descripcion3d":"Modelado y texturizado con Blender y Substance de un bunker ambientado en la segunda guerra mundial, tomando como referencia objetos de esas fechas.",
    },
    {
        "url": "./Imagenes/bnk2.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/bnk3.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/bnk4.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/bnk5.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/DragonPortada.png",
        "nombre3d": "MinoDrag",
        "descripcion3d":"Este proyecto es un modelo 3D realizado íntegramente en ZBrush, donde se ha trabajado tanto la escultura como la textura. A continuación, se presentan renders del modelo desde varias perspectivas.",
    },
    {
        "url": "./Imagenes/DragonII.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/DragonIII.png",
        "nombre3d": "",
        "descripcion3d":"",
    },   
    {
        "url": "./Imagenes/beemoPrincipal.png",
        "nombre3d": "Beemo",
        "descripcion3d":"Este proyecto es un modelo 3D realizado íntegramente en ZBrush, donde se ha trabajado tanto la escultura como la texturización del mismo. El modelo ha sido desarrollado en alta resolución (high poly), lo que permite capturar cada detalle con gran precisión y realismo, resaltando la complejidad y calidad del diseño. A continuación, se presentan renders del modelo desde varias perspectivas"
    },
    {
        "url": "./Imagenes/Beemo.png",
        "nombre3d": "",
        "descripcion3d":""
    },
    {
        "url": "./Imagenes/BeemoDcha.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {       
        "url": "./Imagenes/BeemoIzqda.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/BeemoTop.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/BeemoEspalda.png",
        "nombre3d": "",
        "descripcion3d":"",
    },

    {
        "url": "./Imagenes/BODEGON2.png",
        "nombre3d": "Bodegón",
        "descripcion3d":"Este proyecto es un bodegón low poly creado en 3ds Max, inspirado en el periodo menstrual. La composición reúne objetos que aportan confort durante esos días, como dulces, semillas calientes y un neceser con antiinflamatorios y productos de higiene íntima. Además, he incluido el libro 'Una habitación propia' de Virginia Woolf, un símbolo del espacio personal y la independencia que toda mujer necesita para cuidar de sí misma, especialmente en momentos de vulnerabilidad",
    },
    {       
        "url": "./Imagenes/bodegon3.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/bodegon1.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {       
        "url": "./Imagenes/barbiePortada.png",
        "nombre3d": "Barbie Bot",
        "descripcion3d":"En este proyecto, he texturizado un robot que me fue proporcionado, utilizando Substance. En lugar de optar por una estética espacial o futurista, elegí una temática inspirada en Barbie, buscando un enfoque menos convencional. El acabado envejecido no solo evoca el paso del tiempo, sino que también refleja la idea de que los juguetes están hechos para jugar y, por lo tanto, deben parecer usados y apreciados. Aunque el diseño del robot no encajaría tradicionalmente con la marca Barbie, al texturizarlo con este estilo y añadir una caja que diseñé a juego, he logrado que el conjunto parezca una auténtica reliquia de la marca.",
    },
    {
        "url": "./Imagenes/BarbieBox.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/BarbieTop.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    {
        "url": "./Imagenes/CasaI.png",
        "nombre3d": "Casa Low Poly",
        "descripcion3d":"Este proyecto presenta una casa diseñada en 3ds Max, sin texturizar, destinada para un proyecto de videojuego. El modelo sigue un estilo cartoon, con formas simplificadas",
    },
    {
        "url": "./Imagenes/CasaII.png",
        "nombre3d": "",
        "descripcion3d":"",
    },
    
];

let atras3d = document.getElementById('atras3D');
let adelante3d = document.getElementById('adelante3D');
let imagen3d = document.getElementById('img3d');
let puntos3d = document.getElementById('puntos3d');
let texto3d = document.getElementById('texto3d');
let actual3d = 0;

function actualizarCarrusel3d() {
    // Actualizar la imagen
    imagen3d.innerHTML = `<img class="img3d" src="${Renders[actual3d].url}" alt="Imagen del carrusel" loading="lazy"></img>`;
    
    // Actualizar el texto
    let nombre3d = Renders[actual3d].nombre3d ? `<h3>${Renders[actual3d].nombre3d}</h3>` : "";
    let descripcion3d = Renders[actual3d].descripcion3d ? `<p>${Renders[actual3d].descripcion3d}</p>` : "";
    texto3d.innerHTML = `${nombre3d}${descripcion3d}`;
    
    // Actualizar los puntos de navegación
    posicionCarrusel3d();
}

function posicionCarrusel3d() {
    puntos3d.innerHTML = "";
    for (let i = 0; i < Renders.length; i++) {
        if (i === actual3d) {
            puntos3d.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos3d.innerHTML += '<p>.</p>';
        }
    }
}

// Eventos para los botones
atras3D.addEventListener('click', function() {
    actual3d = (actual3d === 0) ? Renders.length - 1 : actual3d - 1;
    actualizarCarrusel3d();
});

adelante3D.addEventListener('click', function() {
    actual3d = (actual3d === Renders.length - 1) ? 0 : actual3d + 1;
    actualizarCarrusel3d();
});

// Inicializar el carrusel
actualizarCarrusel3d();
let slides = [
    {
        "url": "./Imagenes/LODO2.gif",
        "nombre": "Trabajo Personal",
        "descripcion": "Animacion en progreso. Primera Parte realizada con Photoshop y Animate. Tengo mas animaciones personales en mi cuenta de Instagram donde actualizo con mas frecuencia el contenido.",
    },
    {
        "url": "./Imagenes/Caminar.gif",
        "nombre": "Ciclo Caminar",
        "descripcion": "Aquí se muestra el GIF de la animación en línea del caminar del personaje, creado en Adobe Animate. A continuación, se presenta la hoja de sprites con el personaje ya coloreado en Photoshop, creada para incorporarla a Unity.",
        
    },
    {
        "url": "./Imagenes/SpritesCaminar.png",
        "nombre": "",
        "descripcion": "",
    },
    {
        "url": "./Imagenes/andarcolor.gif",
        "nombre": "",
        "descripcion": "",
    },
    {
        "url": "./Imagenes/Salto.gif",
        "nombre": "Animación Salto",
        "descripcion": "Aquí se muestra el GIF de la animación de salto a color, creado en Adobe Animate. A continuación, se presenta la hoja de sprites en color, hecha en Photoshop.",
        
    },
    {
        "url": "./Imagenes/SpritesSalto.png",
        "nombre": "",
        "descripcion": "",
    },
    {
        "url": "./Imagenes/disparo.gif",
        "nombre": "Animación Disparo",
        "descripcion": "Aquí se muestra el GIF de la animación en línea del disparo del personaje, creado en Adobe Animate. A continuación, se presenta la hoja de sprites con el personaje ya coloreado en Photoshop.",
        
    },
    {
        "url": "./Imagenes/SpritesDisparar.png",
        "nombre": "",
        "descripcion": "",
    },
    {
        "url": "./Imagenes/interactuar.gif",
        "nombre": "Animación Interactuar",
        "descripcion": " Aquí se muestra el GIF a color de la animación del personaje interactuando con objetos, creado en Adobe Animate. A continuación, se presenta la hoja de sprites correspondiente a esta animación.",
       
        
    },
    {
        "url": "./Imagenes/SpritesInteractuar.png",
        "nombre": "",
        "descripcion": "",
    },
    {
        "url": "./Imagenes/idle.gif",
        "nombre": "Animación Idle",
        "descripcion": " Aquí se muestra el GIF a color de la animación idle del personaje, creado en Adobe Animate.",
       
        
    },
  
];

let previousButton = document.getElementById('anterior');
let nextButton = document.getElementById('siguiente');
let currentImageContainer = document.getElementById('imagenActual');
let indicators = document.getElementById('indicadores');
let descriptionContainer = document.getElementById('descripcion');
let currentIndex = 0;

function updateSlider() {
    // Update the image
    currentImageContainer.innerHTML = `<img class="imagenActual" src="${slides[currentIndex].url}" alt="Imagen del slider" loading="lazy"></img>`;
    
    // Update the text
    let title = slides[currentIndex].nombre ? `<h3>${slides[currentIndex].nombre}</h3>` : "";
    let description = slides[currentIndex].descripcion ? `<p>${slides[currentIndex].descripcion}</p>` : "";
    descriptionContainer.innerHTML = `${title}${description}`;
    
    // Update the navigation indicators
    updateIndicators();
}

function updateIndicators() {
    indicators.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
        if (i === currentIndex) {
            indicators.innerHTML += '<p class="bold">.</p>';
        } else {
            indicators.innerHTML += '<p>.</p>';
        }
    }
}

// Event listeners for the buttons
previousButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Initialize the slider
updateSlider();
