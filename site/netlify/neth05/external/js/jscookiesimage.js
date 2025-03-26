
        document.getElementById("imagemInput").addEventListener("change", function(event) {
            let file = event.target.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById("preview").src = e.target.result;
                    localStorage.setItem("imagem", e.target.result);
                };
                reader.readAsDataURL(file);
            }
        });

        // Carregar imagem salva no localStorage ao abrir a página
        window.onload = function() {
            let imagemSalva = localStorage.getItem("imagem");
            if (imagemSalva) {
                document.getElementById("preview").src = imagemSalva;
            }
        };
    
