async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Mostrar los resultados en el div con id "resultados"
        const resultadosDiv = document.getElementById('resultsFetch');
        data.forEach(post => {
            const p = document.createElement('p');
            p.textContent = `ID: ${post.id}, Título: ${post.title}`;
            resultadosDiv.appendChild(p);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', fetchData);
