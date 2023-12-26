function solution(str_list, ex) {
    return str_list.map((el) => {
        if (!el.includes(ex)) return el;
    }).join('');
}