function solution(arr1, arr2) {

    return arr1.map((v, i) => v.map((x, j) => arr1[i][j] + arr2[i][j]));
}