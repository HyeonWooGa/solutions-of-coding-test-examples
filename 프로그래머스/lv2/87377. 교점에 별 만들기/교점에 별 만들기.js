function solution(line) {
  const getIntersectionPoint = () => {
    let points = [];    // 정수로 이루어진 교점을 담을 배열

    for (let i = 0, len = line.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const [a, b, e] = line[i];
        const [c, d, f] = line[j];

        // 직선의 기울기를 구해 비교한다. 기울기가 같다면 교점이 생기지 않는다.
        const slope = a * d - b * c;

        if (slope) {
          const pointX = (b * f - e * d) / slope;
          const pointY = (e * c - a * f) / slope;
          // x, y 좌표가 모두 정수인 교점만을 pints배열에 넣어준다.
          if (Number.isInteger(pointX) && Number.isInteger(pointY)) {
            points.push([pointX, pointY]);
          }
        }
      }
    }
    return points;
  };

  const drawingStar = (points) => {
    // 최소한의 보드를 그리기 위해 교점들의 최소, 최댓값을 구한다.
    const [maxX, maxY, minX, minY] = points.reduce(
      ([maxX, maxY, minX, minY], [x, y]) => [
        Math.max(maxX, x),
        Math.max(maxY, y),
        Math.min(minX, x),
        Math.min(minY, y),
      ],
      [
        Number.MIN_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
      ]
    );

    // 보드를 생성한다.
    let board = Array.from(Array(maxY - minY + 1), () =>
      Array(maxX - minX + 1).fill(".")
    );

    // 교점의 위치에 별을 그린다.
    points.forEach(([x, y]) => {
      board[maxY - y][x - minX] = "*";
    });

    return board.map((x) => x.join(""));
  };

  return drawingStar(getIntersectionPoint());
}