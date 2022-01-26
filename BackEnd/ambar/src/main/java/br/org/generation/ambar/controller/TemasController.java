package br.org.generation.ambar.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.ambar.model.Temas;
import br.org.generation.ambar.repository.TemasRepository;

@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemasController {

	@Autowired
	private TemasRepository temasRepository;

	@GetMapping
	public ResponseEntity<List<Temas>> getAll() {
		return ResponseEntity.ok(temasRepository.findAll());

	}

	@GetMapping("/{id}")
	public ResponseEntity<Temas> getById(@PathVariable Long id) {
		return temasRepository.findById(id).map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/tituloTema/{tituloTema}")
	public ResponseEntity<List<Temas>> getByTituloTema(@PathVariable String tituloTema) {
		return ResponseEntity.ok(temasRepository.findAllByTituloTemaContainingIgnoreCase(tituloTema));
	}

	@PostMapping
	public ResponseEntity<Temas> postTemas(@Valid @RequestBody Temas temas) {
		return ResponseEntity.status(HttpStatus.CREATED).body(temasRepository.save(temas));
	}

	@PutMapping
	public ResponseEntity<Temas> putTemas(@Valid @RequestBody Temas temas) {

		return temasRepository.findById(temas.getId()).map(resposta -> {
			return ResponseEntity.ok().body(temasRepository.save(temas));
		}).orElse(ResponseEntity.notFound().build());

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTemas(@PathVariable Long id) {

		return temasRepository.findById(id).map(resposta -> {
			temasRepository.deleteById(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}).orElse(ResponseEntity.notFound().build());
	}

}
