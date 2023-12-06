const lista = ["Um", "Dois", "Três"];

export function getLista()
{
    return lista;
}

export function limpaLista()
{
    lista.splice(0);
}

export function removeDaLista(x)
{
    lista.splice(x, 1);
}

export function adicionaNaLista(novoItem)
{
    lista.push(novoItem);
}