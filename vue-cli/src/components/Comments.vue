<template>
	<div class="container">
		<br>
		<PageHeader></PageHeader>
		<hr /><br><br>
		<h3>Comentários</h3>
		<hr />
		<FormTodo v-on:add-todo="addComment"></FormTodo>
		<hr /> <br>
		<div class="list-group">
			<p v-if="comments.length == 0">Sem comentários...</p>
			<div class="list-group-item" v-for="(comment, index) in comments" v-bind:key="comment">
				<span class="comment_author">Autor: <strong>{{ comment.name }}</strong></span>
				<p>{{ comment.message }}</p>
				<div>
					<a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
				</div>
			</div>
		</div >
		<hr />
	</div >
</template>

<script>
import FormTodo from './FormTodo.vue'
import PageHeader from './PageHeader.vue'

export default {
	components: {
		FormTodo,
		PageHeader
	},
	data()
	{		// Dados a serem armazenados
		return {
			comments: [
				{
					name: 'Bruno dos Santos',
					message: 'Sou bobo e feio'
				}
			], 
		}
	},

	methods: {		// Funções instanciadas no template
		addComment(comment)
		{
			this.comments.push(comment);
		},

		removeComment(index) 
		{
			this.comments.splice(index, 1);
		}
	},

	computed: {
		allComments() {
			return this.comments.map(comment => ({
				...comment,
				name: comment.name.trim() == 0 ? 'Anônino' : comment.name
			}))
		}
	}
}
</script>