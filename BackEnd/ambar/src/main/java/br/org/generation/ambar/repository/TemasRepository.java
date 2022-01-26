package br.org.generation.ambar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.ambar.model.Temas;



@Repository
public interface TemasRepository extends JpaRepository<Temas, Long> {

	public List<Temas> findAllByTituloTemaContainingIgnoreCase(String  tituloTema);

}
