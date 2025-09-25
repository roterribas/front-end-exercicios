let livro = {
	titulo: 'Memórias do escrivão Isaías Caminha',
	autor: 'Lima Barreto',
	ano: 1909,
	ISBN: '9786599536953',
	emprestar: (titulo) => {
		console.log('Você pegou emprestado o livro ' + titulo)
	}
}

console.log(typeof livro.emprestar);
livro.emprestar(livro.titulo);