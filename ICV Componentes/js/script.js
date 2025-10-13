 // Datos de productos para la búsqueda
const productos = [
            {
                id: 1,
                nombre: "Arduino Uno R3",
                precio: "€24.99",
                imagen: "https://placehold.co/250x180/6a11cb/ffffff?text=Arduino+Uno",
                descripcion: "Placa microcontroladora para proyectos electrónicos"
            },
            {
                id: 2,
                nombre: "Raspberry Pi 4",
                precio: "€79.99",
                imagen: "../assets/images/raspberry.png",
                descripcion: "Ordenador de placa única de última generación",
                url: "../pages/raspberry-Pi.html"
            },
            {
                id: 3,
                nombre: "Sensor DHT22",
                precio: "€8.49",
                imagen: "https://placehold.co/250x180/ff6b6b/ffffff?text=Sensor+Temperatura",
                descripcion: "Sensor de temperatura y humedad preciso"
            },
            {
                id: 4,
                nombre: "LED RGB Programable",
                precio: "€12.99",
                imagen: "https://placehold.co/250x180/20bf6b/ffffff?text=LED+RGB",
                descripcion: "Leds de colores controlables individualmente"
            },
            {
                id: 5,
                nombre: "Protoboard 830 puntos",
                precio: "€7.99",
                imagen: "https://placehold.co/250x180/fdcb6e/ffffff?text=Protoboard",
                descripcion: "Placa de pruebas para circuitos electrónicos"
            },
            {
                id: 6,
                nombre: "Resistencias 1/4W",
                precio: "€2.49",
                imagen: "https://placehold.co/250x180/a29bfe/ffffff?text=Resistencias",
                descripcion: "Paquete de resistencias de diferentes valores"
            }
        ];
        const searchInput = document.getElementById('search');
        const searchResults = document.getElementById('searchResults');
        // Función para filtrar productos
        function filtrarProductos(termino) {
            if (!termino.trim()) {
                searchResults.style.display = 'none';
                return;
            }

            const resultados = productos.filter(producto => 
                producto.nombre.toLowerCase().includes(termino.toLowerCase())
            );

            mostrarResultados(resultados);
        }

        // Función para mostrar resultados
        function mostrarResultados(resultados) {
            searchResults.innerHTML = '';

            if (resultados.length === 0) {
                searchResults.style.display = 'none';
                return;
            }

            resultados.forEach(producto => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="search-result-image">
                    <div class="search-result-info">
                        <p class="search-result-name">${producto.nombre}</p>
                        <p class="search-result-price">${producto.precio}</p>
                    </div>
                `;
                
                item.addEventListener('click', () => {
                    window.location.href = producto.url;
                });
                
                searchResults.appendChild(item);
            });

            searchResults.style.display = 'block';
        }

        // Eventos para el buscador
        searchInput.addEventListener('input', (e) => {
            filtrarProductos(e.target.value);
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value) {
                filtrarProductos(searchInput.value);
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });