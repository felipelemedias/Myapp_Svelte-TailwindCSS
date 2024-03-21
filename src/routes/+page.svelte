<script>
    import Button from "./Button.svelte";
    import {faculdade} from '$lib/store';

    const idade = 19;

    if (idade == 19){
        // ...
    } else{
        //..
    }

    const lista = [
        'Felipe',
        'Ale',
        'Pugas'
    ]

    for(let nome of lista){
        console.log(nome)
    }

    const lista2 = [
        {nome: 'Felipe', idade: 19}, //é um objeto
        {nome: 'Ale', idade: 20},
        {nome: 'Pugas', idade: 21}
    ]

    function mudarNome(){
        faculdade.set('UFV')
    }

</script>

<h1>Meu primeiro site em Svelte(Lógicas)</h1>

<!-- <Button/>
<Button label = "botao 2"/>
<Button label = "botao 3"/>
<Button label = "botao 4"/> -->

{#if idade == 19}
    <p>idade é 19</p>
{:else}
    <p>idade não é 19 eu fiz aniversario kkkkkkk</p>
{/if}

<!-- não é JS, é sintaxe SVELTE -->
{#each lista as nome} 
    <p>{nome}</p>
{/each}

{#each lista2 as {nome, idade}}
    <p>{nome} tem {idade} anos</p>
{/each}

{$faculdade}

<button on:click={mudarNome}>Mudar nome</button>