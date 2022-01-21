package br.org.generation.ambar.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_temas")
public class Temas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "O atributo titulo_tema é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 50, message = "O atributo titulo_tema deve conter no mínimo 03 e no máximo 50 caracteres")
	private String titulo_tema;

	@NotBlank(message = "O atributo descrição é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 255, message = "O atributo descrição deve conter no mínimo 03 e no máximo 255 caracteres")
	private String descricao;

	@NotBlank(message = "O atributo hashtags é obrigatório e não pode conter espaços em branco")
	@Size(min = 3, max = 50, message = "O atributo hashtags deve conter no mínimo 03 e no máximo 50 caracteres")
	private String hashtags;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo_tema() {
		return titulo_tema;
	}

	public void setTitulo_tema(String titulo_tema) {
		this.titulo_tema = titulo_tema;
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

}
