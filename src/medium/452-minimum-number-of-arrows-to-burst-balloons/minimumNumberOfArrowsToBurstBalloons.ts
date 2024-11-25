function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);

    let result = 1;
    let upper = points[0][1];
    for (let i = 1; i < points.length; i++) {
      if (upper >= points[i][0]) {
        continue;
      }
      result++;
      upper = points[i][1];
    }

    return result;
};

export default findMinArrowShots;