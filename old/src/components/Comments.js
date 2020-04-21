Vue.component('comments', 
{
	template: `
	<div class="container">
		<h2>Comentários</h2>
		<hr />
		<div class="form-todo form-group">
			<p>
				<input placeholder="Nome" type="text" name="author" class="form-control" v-model="name" />
			</p>
			<p>
				<textarea placeholder="Comentário" name="message" class="form-control" v-model="message"></textarea>
			</p>
			<button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
		</div>
		<div class="list-group">
			<div class="list-group-item" v-for="(comment, index) in comments">
				<span class="comment_author">Autor: <strong>{{ comment.name }}</strong></span>
				<p>{{ comment.message }}</p>
				<div>
					<a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
				</div>
			</div>
		</div >
	</div >
	`,

	data: function() 
	{		// Dados a serem armazenados
		return {
			comments: [
				{
					name: 'Bruno dos Santos',
					message: 'Sou bobo e feio'
				}
			], 
			name: '',
			message: ''
		}
	},

	methods: {		// Funções instanciadas no template
		addComment() 
		{
			if (this.message.trim() == '')
			{
				return;
			}

			this.comments.push({
				name: this.name.trim() == '' ? 'Anônimo' : this.name,
				message: this.message
			});
			
			this.name = '';
			this.message = '';
		},

		removeComment(index) 
		{
			this.comments.splice(index, 1);
		}
	}
})