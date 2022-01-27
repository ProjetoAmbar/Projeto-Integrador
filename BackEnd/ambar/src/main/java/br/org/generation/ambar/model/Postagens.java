package br.org.generation.ambar.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_postagens")
public class Postagens {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "Título é obrigatório e não pode ter somente espaço")
	@Size(min = 3, max = 50, message = "Título deve estar no limite entre 3 e 50 caractéres")
	private String titulo;

	@NotBlank(message = "Post é obrigatório e não pode ter somente espaço")
	@Size(min = 3, max = 1000, message = "Post deve estar no limite entre 3 e 1000 caractéres")
	private String post;

	@Size(min = 3, max = 100, message = "imagens_url deve estar no limite entre 3 e 100 caractéres")
	private String imagens_url;

	@UpdateTimestamp
	private LocalDateTime data;

	@ManyToOne
	@JsonIgnoreProperties("postagens")
	private Temas temas;

	@ManyToOne
	@JsonIgnoreProperties("usuarios")
	private Usuarios usuarios;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public String getImagens_url() {
		return imagens_url;
	}

	public void setImagens_url(String imagens_url) {
		this.imagens_url = imagens_url;
	}

	public LocalDateTime getData() {
		return data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}

	public Temas getTemas() {
		return temas;
	}

	public void setTemas(Temas temas) {
		this.temas = temas;
	}

	public Usuarios getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(Usuarios usuarios) {
		this.usuarios = usuarios;
	}
	
	

}
