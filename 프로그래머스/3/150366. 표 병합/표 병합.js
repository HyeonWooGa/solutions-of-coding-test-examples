//
function solution(commands) {
  const getTargetPosByKey = (key) => [Math.floor(key / 100), key % 100];
  const getTargetKeyByPos = (pos1, pos2) => pos1 * 100 + pos2;

  class Cell {
    constructor(value, key) {
      this.table = null;
      this.value = value || null;
      this.key = key;
      this.mergedSet = new Set([key]);
    }

    setTable(table) {
      this.table = table;
    }

    reset() {
      this.mergedSet = new Set([this.key]);
      this.value = null;
    }

    changeValue(value) {
      this.value = value;

      for (const key of this.mergedSet) {
        const [i, j] = getTargetPosByKey(key);
        this.table[i][j].value = value;
      }
    }

    merge(r, c) {
      const targetCell = this.table[r][c];
      let { value } = this;
      if (!value) value = targetCell.value;

      const mergedSet = new Set([...this.mergedSet, ...targetCell.mergedSet]);

      for (const key of mergedSet) {
        const [i, j] = getTargetPosByKey(key);

        this.table[i][j].value = value;
        this.table[i][j].mergedSet = mergedSet;
      }
    }

    unMerge() {
      for (const key of this.mergedSet) {
        const savedValue = this.value;
        const [i, j] = getTargetPosByKey(key);

        this.table[i][j].reset();
        this.value = savedValue;
      }
    }
  }

  const table = new Array(51)
    .fill()
    .map(
      (_value, outerIndex) => new Array(51)
        .fill().map(
          (_, innerIndex) => new Cell(
            null,
            getTargetKeyByPos(outerIndex, innerIndex),
          ),
        ),
    );

  for (const row of table) {
    for (const cell of row) {
      cell.setTable(table);
    }
  }

  const result = [];

  for (const command of commands) {
    const [splitCommand, ...rest] = command.split(' ');

    if (splitCommand === 'UPDATE') {
      const [r, c, value] = rest;
      if (!value) {
        for (const row of table) {
          for (const oneCell of row) {
            if (oneCell.value === r) oneCell.value = c;
          }
        }
      } else {
        table[r][c].changeValue(value);
      }
    } else if (splitCommand === 'MERGE') {
      const [r1, c1, r2, c2] = rest;

      table[r1][c1].merge(r2, c2);
    } else if (splitCommand === 'UNMERGE') {
      const [r, c] = rest;

      table[r][c].unMerge();
    } else if (splitCommand === 'PRINT') {
      const [r, c] = rest;

      result.push(table[r][c].value || 'EMPTY');
    }
  }

  return result;
}