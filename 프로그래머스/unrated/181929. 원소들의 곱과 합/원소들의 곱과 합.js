function solution(num_list) {
    let hap = 0, gop = 1;
    
    num_list.forEach(num => {
        hap += num;
        gop *= num;
    })
    
    // console.log(Math.pow(hap, 2), gop);
    
    if (Math.pow(hap, 2) > gop) return 1;
    else return 0;
}