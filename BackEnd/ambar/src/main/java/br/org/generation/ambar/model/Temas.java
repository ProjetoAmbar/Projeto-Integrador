package br.org.generation.ambar.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_temas")
public class Temas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "O atributo tituloTema é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 50, message = "O atributo tituloTema deve conter no mínimo 03 e no máximo 50 caracteres")
	private String tituloTema;

	@NotBlank(message = "O atributo descrição é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 255, message = "O atributo descrição deve conter no mínimo 03 e no máximo 255 caracteres")
	private String descricao;

	@NotBlank(message = "O atributo hashtags é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 50, message = "O atributo hashtags deve conter no mínimo 03 e no máximo 50 caracteres")
	private String hashtags;

	@OneToMany(mappedBy = "temas", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("temas")
	private List<Postagens> postagens;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTituloTema() {
		return tituloTema;
	}

	public void setTituloTema(String tituloTema) {
		this.tituloTema = tituloTema;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getHashtags() {
		return hashtags;
	}

	public void setHashtags(String hashtags) {
		this.hashtags = hashtags;

	}

	public List<Postagens> getPostagens() {
		return postagens;
	}

	public void setPostagens(List<Postagens> postagens) {
		this.postagens = postagens;
	}

}
