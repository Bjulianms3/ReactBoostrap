namespace backendnet.Models;

public class Pelicula{
    public int PeliculaId {get; set; }

    public string Titulo {get; set;} = "sin titulo";

    public string Sinopsis {get; set;} = "sin sinopsis";

    public int Anio {get; set;}

    public string Poster {get; set;} = "N/A";

    public ICollection<Categoria>? Categorias {get; set;}
}