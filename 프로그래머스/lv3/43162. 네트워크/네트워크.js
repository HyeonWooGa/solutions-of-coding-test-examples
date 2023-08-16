function solution(n, computers) {
    const visited = Array(n).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        computers.forEach((relation, adjNode) => {
            if (relation[node] && !visited[adjNode]) {
                dfs(adjNode);
            }
        });
    }
    let count = 0;
    computers.forEach((_, node) => {
        if (!visited[node]) {
            dfs(node);
            count++;
        }
    });
    return count;
}